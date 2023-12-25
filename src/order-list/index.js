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
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
//import DataTable from "examples/Tables/DataTable";
import useAuth from "hooks/useAuth";
import useAxios from "hooks/useAxios";

// Data
//import dataTableData from "order-list/data/dataTableData";

import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';


function OrderList() {
  const { requireAuthorization } = useAuth();
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([{}]);
  const [rows, setRows] = useState(rows);
  const url = 'http://localhost:8080/acquisitions/listProducts';

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    requireAuthorization(['ROLE_CLIENT', 'ROLE_ADMIN']);
    request(url, 'get', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }).then((data) => setProduct(data.data));
    // console.log('order-list data ',data.data);
    //  console.log('order-list data ',data)

  }, []);

  const { request,
    appendData,
  } = useAxios();

  const newProduct = (name) => {
    appendData({ productName: name });
    if (!errorStatus) {
      toggleShow()
    }
  }

  useEffect(() => {
    if (product) {
      product.map((item) => {
      
        console.log('id: ', getRowId);
        console.log('name: ', productName);

      });
    }
  }, [product])
  console.log('111111111111111111111')
  console.log('product order-list : ', product);

  const columns = [
    { field:'id' ,headerName: 'ID', width: 70 },
    { field: 'productName',headerName: 'Product name', width: 130 },
  ];

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
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </Card>
      </SoftBox>
    </DashboardLayout>


    /* { <div>
       <div >
         <h1>products</h1>
         <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
               <AddProduct
                 toggleShow={toggleShow}
                 show={show}
                 newProduct={newProduct}
               />
             </SoftBox>
         <ul >
 
           <li>
             {
               product ? product.map((item) => {
                 return (
                   <li key={item.id}>
                     <h1 ><b>{item.productName}</b></h1>
                     <SoftButton variant="contained" color="success" >Edit</SoftButton>
                     <SoftButton variant='contained' color='error'>Delete</SoftButton>
                   </li>
                 )
               })
                 : <h3>veri gelmedi</h3>}
           </li>
         </ul>
       </div>
     </div> }*/
  );
}

export default OrderList;

