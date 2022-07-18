import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './componets/Common/Sidebar/Sidebar';
import Login from './componets/Login/Login';
import Dashboard from './componets/Dashboard/Dashboard';
import History from './componets/History/History';
import NewLeave from './componets/NewLeave/NewLeave';
import AllDept from './componets/AdminPages/NewDepartment/AllDept/AllDept';
import AllLocation from './componets/AdminPages/NewLocation/AllLocation/AllLocation';
import Emp from './componets/AdminPages/NewEmployee/Emp/Emp';
import Notice from './componets/Notice/Notice';
import { useTest } from './Utils/Axios';
import AllLeaves from './componets/AdminPages/Leaves/AllLeaves';


function App() {
  const location = window.location.pathname;
  useTest()
  return (

    <div className='app'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/dept-mgmt" element={<AllDept />} />
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
