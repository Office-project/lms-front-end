import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './componets/Common/Sidebar/Sidebar';
import Login from './componets/Login/Login';
import Dashboard from './componets/Dashboard/Dashboard';
import LeaveTypes from './componets/LeaveTypes/LeaveTypes';
import History from './componets/History/History';
import NewLeave from './componets/NewLeave/NewLeave';
import AllDept from './componets/AdminPages/NewDepartment/AllDept/AllDept';
import AllLocation from './componets/AdminPages/NewLocation/AllLocation/AllLocation';
import Emp from './componets/AdminPages/NewEmployee/Emp/Emp';
import Notice from './componets/Notice/Notice';


function App() {
  const location = window.location.pathname;
  return (

    <div className='app'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave_types" element={<LeaveTypes />} />
          <Route path="/history" element={<History />} />
          <Route path="/new-leave" element={<NewLeave />} />
          <Route path="/dept-mgmt" element={<AllDept />} />
          <Route path="/location-mgmt" element={<AllLocation />} />
          <Route path="/employee-setup" element={<Emp />} />
          <Route path="/notice" element={<Notice/>}/>

        </Routes>
      </Router>

    </div>
  );

}

export default App;
