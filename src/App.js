import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './componets/Common/Sidebar/Sidebar';
import apiClient from './Utils/Axios';
import useLogout from './Utils/useLogout';

const Login = React.lazy(() => import('./componets/Login/Login'));
const Dashboard = React.lazy(() => import('./componets/Dashboard/Dashboard'));
const History = React.lazy(() => import('./componets/History/History'));
const DeptView = React.lazy(() => import('./componets/AdminPages/NewDepartment/AllDept/DeptView'));
const AllLocation = React.lazy(() => import('./componets/AdminPages/NewLocation/AllLocation/AllLocation'));
const Emp = React.lazy(() => import('./componets/AdminPages/NewEmployee/Emp/Emp'));
const Notice = React.lazy(() => import('./componets/Notice/Notice'));
const AllLeaves = React.lazy(() => import('./componets/AdminPages/Leaves/AllLeaves'))



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
          <Route path="/dashboard" element={
            <React.Suspense fallback={<>....</>}>
              <Dashboard />
            </React.Suspense>
          } />
          <Route path="/history" element={
            <React.Suspense fallback={<>....</>}>
              <History />
            </React.Suspense>} />
          <Route path="/dept-mgmt" element={
            <React.Suspense fallback={<>....</>}>
              <DeptView />
            </React.Suspense>
          } />
          <Route path="/location-mgmt" element={
            <React.Suspense fallback={<>....</>}>
              <AllLocation />
            </React.Suspense>
          } />
          <Route path="/employee-setup" element={
            <React.Suspense fallback={<>....</>}>
              <Emp />
            </React.Suspense>
          } />
          <Route path="/notice" element={
            <React.Suspense fallback={<>....</>}>
              <Notice />
            </React.Suspense>
          } />
          <Route path="/all-leaves" element={
            <React.Suspense fallback={<>....</>}>
              <AllLeaves />
            </React.Suspense>
          } />
          {/* <Route path="*" element={<h1></h1>>}/> */}

        </Routes>
      </Router>

    </div>
  );

}

export default App;
