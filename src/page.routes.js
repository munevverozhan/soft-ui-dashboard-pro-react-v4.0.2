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

/** 
  All of the routes for the page layout of Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";
import SpaceShip from "examples/Icons/SpaceShip";

const pageRoutes = [
  {
    name: "Extra",
    key: "extra",
    icon: <Document size="12px" color="white" />,
    collapse: [
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
      },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
      },
    ],
  },
  {
    name: "Orders",
    key: "orders",
    icon: <Document size="12px" color="white" />,
    collapse: [
      {
        name: "Order List",
        key: "order-list",
        route: "/ecommerce/orders/order-list",
      }
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    collapse: [
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      }
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    collapse: [
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
    ],
  },
  {
    name: "Error",
    key: "error",
    collapse: [
      {
        name: "Error 404",
        key: "error-404",
        route: "/authentication/error/404",
      },
      {
        name: "Error 500",
        key: "error-500",
        route: "/authentication/error/500",
      },
    ],
  },
];

export default pageRoutes;
