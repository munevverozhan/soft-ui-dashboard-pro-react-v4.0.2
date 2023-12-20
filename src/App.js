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


// react-router components
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard PRO React themes
import theme from "assets/theme";

// Soft UI Dashboard PRO React routes
import routes from "routes";

import LinkPage from "components/LinkPage";
import Unauthorized from "components/Unauthorized";
import Home from './components/Home';
import Admin from "components/Admin";
import OrderList from "order-list";
import { useEffect, useState } from "react";
import axios from "api/axios";
import useAuth from "hooks/useAuth";

export default function App() {

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined && token !== '') {

      if (!(auth !== null && auth !== undefined && auth.id > 0)) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        axios.get('/current-user').then((response) => {
          setAuth(response.data)
          setIsLoggedIn(true)
        }).catch((error) => {
          console.log(error)
          setAuth({})
        }
        )
      }
    }

  }, [auth])

  useEffect(() => {
    if (isLoggedIn) {
      console.log('hiy')

      navigate('/');
    }
  }, [isLoggedIn])


  console.log('loggedin', isLoggedIn);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/login" element={<Navigate to="/authentication/sign-in" />} />
        <Route path="/*" element={<Navigate to='/authentication/error/404' />} />
        {/* public routes */}
        <Route path='/linkpage' element={<LinkPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* we want to protected this routes */}

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/order-list" element={<OrderList />} />

      </Routes>
    </ThemeProvider>
  );
}
