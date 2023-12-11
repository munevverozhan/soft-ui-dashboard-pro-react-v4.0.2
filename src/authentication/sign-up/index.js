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
import { Link } from "react-router-dom";

import axios from "api/axios";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "authentication/components/CoverLayout";

// Images
import curved11 from "assets/images/curved-images/curved11.jpg";

const REGISTER_URL = '/register';

function Cover() {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    console.log(password);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [userName, password, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({ userName, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      console.log(response.data);
      console.log(response.token);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('no server');
      } else if (err.response?.status === 409) {
        setErrMsg('Username zaten var.');
      }
      else {
        setErrMsg('registration failed');
      }
      errRef.current.focus();
    }

    setSuccess(true);
  }
  return (
    <>
      {success
        ?
        <>
          <section>
            <h1>success</h1>
          </section>
          {alert('başarılı bir şekilde kayıt oldunuz !')}
        </>
        :
        <CoverLayout
          title="Join us today"
          description="Enter your email and password to register"
          image={curved11}
          top={12}
        >
          <SoftBox component="form" role="form" onSubmit={handleSubmit}>
            <SoftBox mb={2} lineHeight={1.25}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Username
                </SoftTypography>
              </SoftBox>
              <SoftInput
                placeholder="Username"
                type='text'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUserName(e.target.value)}
                required
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p id='uidnote' className={userFocus && !userName ? 'instructions' : 'offscreen'}>
                isim alanı boş bırakılamaz
              </p>
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
                required
                arial-aria-describedby='pwdnote'
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p id='pwdnote' className={pwdFocus && !password ? 'instructions' : 'offscreen'}>
                şifre boş bırakılamaz
              </p>
            </SoftBox>
            <SoftBox mb={2} lineHeight={1.25}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Confirm Password
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="password"
                placeholder="confirm Password"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby='confirmnote'
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                Girdi alanı girilen şifre ile aynı olmak zorunda.
              </p>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton disabled={!userName || !password || !validMatch ? true : false} variant="gradient" color="info" fullWidth>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </CoverLayout>
      }
    </>
  );
}

export default Cover;
