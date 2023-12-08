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
  All of the routes for the Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard PRO React layouts

import SweetAlerts from "layouts/pages/sweet-alerts";
import OrderList from "layouts/ecommerce/orders/order-list";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignUpCover from "layouts/authentication/sign-up/cover";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";

// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SettingsIcon from "examples/Icons/Settings";
import Basket from "examples/Icons/Basket";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";

const routes = [
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <Office size="12px" />,
    collapse: [
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
        component: <SweetAlerts />,
      }
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <Basket size="12px" />,
    collapse: [

      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: <OrderList />,
          }
        ],
      }
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
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
            component: <SignUpCover />,
          },
        ],
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  {
    type: "collapse",
    name: "Components",
    key: "components",
    icon: <CustomerSupport size="12px" />,
    collapse: [
      {
        name: "Alerts",
        key: "alerts",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/soft-ui-dashboard/",
      },
      {
        name: "Buttons",
        key: "buttons",
        href: "https://www.creative-tim.com/learning-lab/react/buttons/soft-ui-dashboard/",
      },
      {
        name: "Input",
        key: "input",
        href: "https://www.creative-tim.com/learning-lab/react/input/soft-ui-dashboard/",
      },
      {
        name: "Select",
        key: "select",
        href: "https://www.creative-tim.com/learning-lab/react/select/soft-ui-dashboard/",
      },
    ],
  },
];

export default routes;
