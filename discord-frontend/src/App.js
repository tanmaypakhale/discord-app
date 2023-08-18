import React from 'react';
import { BrowserRouter,  Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import AlertNotification from './shared/AlertNotification';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    <AlertNotification />
    </>
  );
}

export default App;
