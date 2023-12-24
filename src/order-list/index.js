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

// @mui material components
import Card from "@mui/material/Card";
import AddProduct from "components/AddProduct";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import useAuth from "hooks/useAuth";
import useAxios from "hooks/useAxios";

// Data
import dataTableData from "order-list/data/dataTableData";

import { useEffect, useState } from "react";

function OrderList() {
  const { requireAuthorization } = useAuth();
  const [show, setShow] = useState(false);
  const url = '/products';

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    requireAuthorization(['ROLE_CLIENT', 'ROLE_ADMIN']);
  }, []);

  const { request,
    appendData,
    data: { products } = {},
    errorStatus
  } = useAxios(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + localStorage.getItem('token'),
    },
  });

  useEffect(() => {
    request();
  }, []);

  const newProduct = (name) => {
    appendData({ name: name });
    if (!errorStatus) {
      toggleShow()
    }
  }

  return (
    <DashboardLayout>
      <SoftBox my={3}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <AddProduct
            toggleShow={toggleShow}
            show={show}
            newProduct={newProduct}
          />
        </SoftBox>
        <Card>
          <DataTable table={dataTableData} />
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default OrderList;

