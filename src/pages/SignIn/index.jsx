import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom/dist";
import { SIGNUPROUTE } from "../../routes/Route";
import { useDispatch, useSelector } from "react-redux";
import LoginUser from "../../redux/app/actions/auth";

const SignIn = () => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const theme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ValidEmail = useSelector((state) => state.app.email);
  const ValidPassword = useSelector((state) => state.app.password);

  const signInHandler = () => {
    dispatch(
      LoginUser({ email, password, ValidEmail, ValidPassword }, navigate)
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              mt: 1,
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LogoPrimary />
            <Typography variant='h2' color={"lightGrey"}>
              Welcome back!
            </Typography>

            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={signInHandler}
            >
              Sign In
            </Button>
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate(SIGNUPROUTE)}
            >
              Create An Account
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
