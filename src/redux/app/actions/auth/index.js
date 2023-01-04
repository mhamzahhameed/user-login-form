import Home from "../../../../pages/Home";
import { HOMEROUTE } from "../../../../routes/Route";

const LoginUser = (payload, navigate) => {
  console.log(payload.ValidEmail);
  console.log(payload.email);
  console.log(payload.ValidPassword);
  console.log(payload.password);

  return () => {
    if (
      payload.email === payload.ValidEmail &&
      payload.password === payload.ValidPassword
    ) {
      navigate(HOMEROUTE);
    } else {
      alert("Invalid credentials");
    }
  };
};

export default LoginUser;
