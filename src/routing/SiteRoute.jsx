import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MainLayout from "../themes/MainLayout";
import LoginLayout from "../themes/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import Pdftable from "../pages/Table/Pdftable";
import Pdfform from "../pages/Table/Pdfform";
import PdfCalendar from "../pages/Table/PdfCalander";
import Signup from "../pages/Login/Signup";
import SmartLogin from "../pages/Login/SmartLogin";
import TextBoxExample from "../pages/examples/TextBoxExample";
import TableExample from "../pages/examples/TableExample";
import SelectBoxExample from "../pages/examples/SelectBoxExample";
import ModalExample from "../pages/examples/ModalExample";
import EmailSettings from "../pages/Settings/EmailSettings";
import FileSettings from "../pages/Settings/FileSettings";
import LoginSettings from "../pages/Settings/LoginSettings";
import RemoteServerSettings from "../pages/Settings/RemoteServerSettings";
import SiteSettings from "../pages/Settings/SiteSettings";
import SmartDriveLogin from "../pages/Login/SmartDriveLogin";

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
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/pdftable" element={<Pdftable/>} />
          <Route path="/newform" element={<Pdfform/>} />
          <Route path="/pdfcal" element={<PdfCalendar/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/SmartLogin" element={<SmartLogin/>} />

          {/* Settings */}
          <Route  path="/email" element={<EmailSettings/>}/>
          <Route  path="/file-settings" element={<FileSettings/>}/>
          <Route  path="/login-settings" element={<LoginSettings/>}/>
          <Route  path="/remote-server-settings" element={<RemoteServerSettings/>}/>
          <Route  path="/site-settings" element={<SiteSettings/>}/>
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