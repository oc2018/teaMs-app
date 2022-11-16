import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, SideMenu, Form, AuthForm } from './components';
import {  Home, PickerDetail, FeatureDetails, Transactions } from './pages';

import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className='app-container'>
        <div className='sideMenu'>
          <SideMenu />
        </div>
        <div className='main-container'>
          <Routes>
            {/* <Route path='/' element={<AuthForm />} /> */}
            <Route path='/' element={ <Home />} />
            <Route path='/form' element={ <Form />} />
            <Route path='/detail/:pick' element={<PickerDetail />} />
            <Route path='/feature/monthlydetail' element={<FeatureDetails detail='monthly' />} />
            <Route path='/feature/annualdetail' element={<FeatureDetails detail='annual' />} />
            <Route path='/feature/cumulativedetail' element={<FeatureDetails detail='cumulative' />} />
            <Route path='/transactions' element={ <Transactions />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;