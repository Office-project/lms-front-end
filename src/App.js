import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './componets/Common/Sidebar/Sidebar';
import Login from './componets/Login/Login';
import Dashboard from './componets/Dashboard/Dashboard';
import History from './componets/History/History';
import AllLocation from './componets/AdminPages/NewLocation/AllLocation/AllLocation';
import Emp from './componets/AdminPages/NewEmployee/Emp/Emp';
import Notice from './componets/Notice/Notice';
import AllLeaves from './componets/AdminPages/Leaves/AllLeaves';
import DeptView from './componets/AdminPages/NewDepartment/AllDept/DeptView';
import apiClient from './Utils/Axios';
import useLogout from './Utils/useLogout';


function Init() {
  const logout = useLogout();
  const init = () => {
    apiClient.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );
  }
  return init();
}
function App() {

  return (

    <div className='app'>
      <Router>
        <Init />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/dept-mgmt" element={<DeptView />} />
          <Route path="/location-mgmt" element={<AllLocation />} />
          <Route path="/employee-setup" element={<Emp />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/all-leaves" element={<AllLeaves />} />
          {/* <Route path="*" element={<h1></h1>>}/> */}

        </Routes>
      </Router>

    </div>
  );

}

export default App;
