import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LogoPrimary from "../../assets/logos/LogoPrimary";
import DatePickers from "../../components/Datepicker";
import { useNavigate } from "react-router-dom/dist";
import { SIGNINROUTE } from "../../routes/Route";
import { useDispatch } from "react-redux";
import {
  getEmail,
  getFirstName,
  getPassword,
  getlastName,
} from "../../redux/app";

const SignUp = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const dispatch = useDispatch();
  const theme = createTheme();
  const navigate = useNavigate();
  const formRef = useRef();

  const signInHandler = () => {
    formRef.current.reportValidity();
    navigate(SIGNINROUTE);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              mt: 1,
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LogoPrimary />
            <Typography variant='h4' color={"lightGrey"}>
              Sign Up to Mercury Sols
            </Typography>
            <form ref={formRef}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='firstName'
                label='First Name'
                name='firstName'
                autoComplete='firstName'
                autoFocus
                onChange={(e) => dispatch(getFirstName(e.target.value))}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lastname'
                autoFocus
                onChange={(e) => dispatch(getlastName(e.target.value))}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e) => dispatch(getEmail(e.target.value))}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => dispatch(getPassword(e.target.value))}
              />
              <DatePickers />
              <Button
                type='submit'
                variant='contained'
                sx={{ mt: 3 }}
                onClick={() => navigate(SIGNINROUTE)}
              >
                Already Have Account?
              </Button>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={signInHandler}
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
