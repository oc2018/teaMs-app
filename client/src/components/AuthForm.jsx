import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateUserMutation, useLogInUserMutation } from '../services/pickerApi';

const AuthForm = () => {

    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
    const [userData, setUserData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false)
    const  [ createUser ]  = useCreateUserMutation();
    const  [ logInUser ]  = useLogInUserMutation();
    const history = useNavigate()

    // console.log(result1)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            if(userData.password !== userData.confirmPassword) {
                alert( `Passwords must match` )
                return
            }
            createUser(userData);
            setUserData(initialState);
            history('/home')
        }else {
            logInUser(userData);
            setUserData(initialState);
            history('/home')
        }
    }

  return (
    <div className='authForm-container'>
        <div>
            <form>
                {
                    isSignup ? <>     
                    <div>
                    <input type="text" value={userData.firstName} onChange={(e)=> setUserData({...userData, firstName: e.target.value })} placeholder='First Name' />
                    <input type="text" value={userData.lastName} onChange={(e) => setUserData({...userData, lastName: e.target.value })} />
                    </div>               
                    </> : ''
                }
                <input type="email" value={userData.email.toLowerCase()} onChange={(e) => setUserData({...userData, email: e.target.value })} placeholder='Email' />
                <input type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value })} placeholder='Password' />
                {
                    isSignup ? <>
                <input type="password" value={userData.confirmPassword} onChange={(e) => setUserData({...userData, confirmPassword: e.target.value })} placeholder='Confirm Password' />
                    </>: ''
                }
                <button  onClick={handleSubmit}>{ isSignup ? `Sign Up`: `Log In`}</button>
            </form>
            <button onClick={() => setIsSignup(!isSignup)}>{isSignup ? `Log In`: `Not a member sign up`}</button>
        </div>
    </div>
  )
}

export default AuthForm;