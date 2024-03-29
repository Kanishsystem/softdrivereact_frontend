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
import Notification from "../pages/Notification/Notification";

// settings
import Settings from "../pages/Settings/index";
import FileViewer from "../pages/AllFiles/FileViewer";
import ForgetPassword from "../pages/Login/ForgetPassword";
import CheckRadioSwitch from "../pages/examples/CheckRadioSwitch";
import UserProfile from "../pages/UserProfile/UserProfile";
import Insights from "../pages/Dashboard/Insights";
import SmartFormExample from "../pages/examples/SmartFormExample";
import DateBoxExample from "../pages/examples/DateBoxExample";
import TestComponent from "../pages/examples/TestComponent";


const SiteRoute = () => {
  const isAuthenticated = true;

  const exampleRoutes = () => {
    return (
      <MainLayout>
        <Routes>
          <Route path="textbox" element={<TextBoxExample />} />
          <Route path="selectbox" element={<SelectBoxExample />} />
          <Route path="table" element={<TableExample />} />
          <Route path="modal" element={<ModalExample />} />
          <Route path="checkradio" element={<CheckRadioSwitch />} />
          <Route path="form" element={<SmartFormExample />} />
          <Route path="date" element={<DateBoxExample />} />
          <Route path="test" element={<TestComponent />} />
        </Routes>
      </MainLayout>
    );
  };

  const mainRouteChildren = () => {
    return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/SmartLogin" element={<SmartLogin />} />

          {/* all Files */}
          <Route path="/all-files" element={<AllFiles />} />
          <Route path="/share-with-me" element={<ShareWithMe />} />
          <Route path="/recycle-bin" element={<RecyleBin />} />

          {/* Insights */}
          <Route path="/insights" element={<Insights />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />

          {/* users and roles */}
          <Route path="/roles" element={<RoleTable />} />
          <Route path="/users" element={<UserTable />} />

          {/* Other Route */}
          <Route path="/fileview" element={<FileViewer />} />

          {/* Menubar  */}
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<UserProfile />} />

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
          <Route path="/examples/*" element={exampleRoutes()} />
          <Route path="/site/*" element={mainRouteChildren()} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="input-box" element={<TextBoxExample />} />
          <Route path="checkradio" element={<CheckRadioSwitch />} />
          <Route path="table" element={<TableExample />} />
          <Route path="form" element={<SmartFormExample />} />
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
