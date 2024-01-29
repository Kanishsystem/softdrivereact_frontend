import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MainLayout from "../themes/MainLayout";
import LoginLayout from "../themes/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import Signup from "../pages/Login/Signup";
import SmartLogin from "../pages/Login/SmartLogin";
import TextBoxExample from "../pages/examples/TextBoxExample";
import TableExample from "../pages/examples/TableExample";
import SelectBoxExample from "../pages/examples/SelectBoxExample";
import ModalExample from "../pages/examples/ModalExample";
import SmartDriveLogin from "../pages/Login/SmartDriveLogin";
import AllFiles from "../pages/AllFiles/AllFiles";
import ShareWithMe from "../pages/ShareFiles/ShareWithMe";
import RecyleBin from "../pages/AllFiles/RecyleBin";
import RoleTable from "../pages/Role/RoleTable";
import UserTable from "../pages/User/UserTable";


// settings
import Settings from "../pages/Settings/index";
import ForgetPassword from "../pages/Login/ForgetPassword";

const SiteRoute = () => {
  const isAuthenticated = true;

  const exampleRoutes=()=>{
    return (
      <MainLayout>     
        <Routes>
          

          <Route path="textbox" element={<TextBoxExample />} />  
          <Route path="selectbox" element={<SelectBoxExample />} />  
          <Route path="table" element={<TableExample />} />  
          <Route path="modal" element={<ModalExample />} />   
        </Routes>
    </MainLayout>
    )
  }

  const mainRouteChildren = () => {
    return (
      <MainLayout>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/SmartLogin" element={<SmartLogin/>} />

          {/* all Files */ }
          <Route  path="/all-files" element={<AllFiles />}/>
          <Route path="/share-with-me" element={<ShareWithMe/>} />
          <Route path="/recycle-bin" element={<RecyleBin/>} /> 

          {/* Settings */}
          <Route  path="/settings" element={<Settings/>}/>
          {/* users and roles */}
          <Route path="/roles" element={<RoleTable/>} />
          <Route path="/users" element={<UserTable />} />

       
         
        </Routes>
      </MainLayout>
    );
  };




  const loginLayoutChildren = () => {
    return (
      <LoginLayout>
        {/* <Login /> */}
        <SmartDriveLogin />
      </LoginLayout>
    );
  };

  return (
    <>
      <Router>
        <Routes>         
          <Route path="/" element={loginLayoutChildren()} />         
          <Route
            path="/examples/*"
            element={exampleRoutes()}
          />
           <Route
            path="/site/*"
            element={mainRouteChildren()}


          />
          <Route path="/forget_password" element={<ForgetPassword />} />
           
          
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default SiteRoute;

/*
 <Route
            path="/site/*"
            element={<PrivateRoute> {mainRouteChildren()}</PrivateRoute>}
          />
 <Route
            path="/home"
            element={ mainRouteChildren()}
          />*/