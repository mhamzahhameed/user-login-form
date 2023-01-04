import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoggedIn from "../pages/LoggedIn";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { SIGNINROUTE, SIGNUPROUTE, HOMEROUTE } from "./Route";
import Home from "../pages/Home";
import LoggedIn from "../pages/LoggedIn";

const Index = () => {
  return (
    <Routes>
      <Route path={SIGNINROUTE} element={<SignIn />} />
      <Route path={HOMEROUTE} element={<LoggedIn />} />
      <Route path={SIGNUPROUTE} element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Index;
