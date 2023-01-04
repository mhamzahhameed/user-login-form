import React from "react";
import { useSelector } from "react-redux";

const LoggedIn = () => {
  const firstName = useSelector((state) => state.app.firstName);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> {firstName}</h2>
    </div>
  );
};

export default LoggedIn;
