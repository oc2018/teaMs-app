import React, { useState } from 'react';
import { useCreatePickerMutation } from '../services/pickerApi';


const Form = () => {
    const [ createPicker ] = useCreatePickerMutation();
    const initialFormData = { name: '', otherNames: '', weight: '' };
    const [formData, setFormData] = useState(initialFormData);
    const handleSubmit = (e) => {
        e.preventDefault();
        createPicker(formData);
        setFormData(initialFormData);        
    }
    
  return (
    <div className='form-container'>
        <div className='form'>
          <div className='input'>
            <input type="text" placeholder='First Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="text" placeholder='Other Names' value={formData.otherNames} onChange={(e) => setFormData({ ...formData, otherNames: e.target.value })} />
            <input type="text" required placeholder='Weight' value={formData.weight} onChange={(e)=>setFormData({ ...formData, weight: e.target.value })} />
          </div>
            <button onClick={handleSubmit}>Save</button>
        </div>        
    </div>
  )
}

export default Form