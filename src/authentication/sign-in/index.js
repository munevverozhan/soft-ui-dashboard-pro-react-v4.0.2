/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useRef, useState, useEffect } from "react";

// react-router-dom components
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "api/axios";
import useAuth from "hooks/useAuth";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";

const LOGIN_URL = '/login';

function Cover() {
  const {setAuth, setToken,auth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userName, password])

  useEffect(() => {
    if (auth !== null && auth !== undefined && auth.id > 0) {
      navigate('/');
    }
  }, [auth])

  console.log(location)
  console.log('local storage : ', localStorage);
  console.log('common: ', axios.defaults.headers.common);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      console.log('response.data', response.data);

      const token = response.data.data.token;
      const rol = response.data.data.role;
      const id = response.data.data.id;

      setToken(token);
      console.log('local storage : ', localStorage);

      setAuth({ id, userName, password, rol, token });
      console.log('auth login: ',rol)

      setUserName('');
      setPassword('');

      navigate('/');

    } catch (err) {
      if (!err?.response) {
        setErrMsg('no server response');
      } else if (err.response?.status === 400) {
        setErrMsg('missing username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('unauthorized');
      } else {
        setErrMsg('login failed')
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>

      <CoverLayout
        title="Welcome back"
        description="Enter your username and password to sign in"
        image={curved9}
      >

        <SoftBox component="form" role="form" onSubmit={handleSubmit}  >
          <SoftBox mb={2} lineHeight={1.25}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Username
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="text"
              placeholder="Username "
              ref={userRef}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
              autoFocus
            />
          </SoftBox>

          <SoftBox mb={2} lineHeight={1.25}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </SoftBox>

          <SoftBox mt={4} mb={1}>
            <SoftButton type="submit" variant="gradient" color="info" fullWidth >
              sign in
            </SoftButton>
          </SoftBox>

          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SoftTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </CoverLayout >
    </>
  );
}

export default Cover;
