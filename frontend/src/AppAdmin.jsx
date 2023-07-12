import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import HeaderAdmin from './admin/components/HeaderAdmin/HeaderAdmin';
import FooterAdmin from './admin/components/FooterAdmin/FooterAdmin';
import HomeAdmin from './admin/pages/HomeAdmin';
import AdminDashboard from './admin/pages/AdminDashboard';
import { LoginContext } from './Context';
import LoginForm from './components/loginForm/LoginForm';
import './AppAdmin.css';



function AppAdmin() {
  const {isLoginDisplayedAdmin} = useContext(LoginContext)


  return (
    <div className='app-admin'>
      {isLoginDisplayedAdmin && <LoginForm />}
      <HeaderAdmin />
        <Routes>
        <Route path='/' element={<HomeAdmin />} />
        <Route path='/admin' element={<AdminDashboard/>} />
      </Routes>
      <FooterAdmin />
    </div>
  );
}

export default AppAdmin;
