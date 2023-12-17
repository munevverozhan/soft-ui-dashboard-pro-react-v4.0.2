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

/* eslint-disable react/prop-types */
// ProductsList page components
import IdCell from "order-list/components/IdCell";
import DefaultCell from "order-list/components/DefaultCell";

const dataTableData = {
  columns: [
    { Header: "id", accessor: "id", Cell: ({ value }) => <IdCell id={value} /> },

    {
      Header: "product",
      accessor: "product",
      Cell: ({ value }) => <DefaultCell value={value} />
    }
  ],

  rows: [
    {
      id: "#10421",
      product: "Nike Sport V2",
    },
    {
      id: "#10422",
      product: "Valvet T-shirt",
    },
    {
      id: "#10423",
      product: "Leather Wallet",
    },
    {
      id: "#10424",
      product: "Bracelet Onu-Lino",
    },
    {
      id: "#10425",
      product: "Phone Case Pink",
    },
    {
      id: "#10426",
      product: "Backpack Niver",
    },
    {
      id: "#10427",
      product: "Adidas Vio",
    },
    {
      id: "#10428",
      product: "Airpods 2 Gen",
    },
    {
      id: "#10429",
      product: "Bracelet Warret",
    },
    {
      id: "#10430",
      product: "Watter Bottle India",
    },
    {
      id: "#10431",
      product: "Kitchen Gadgets",
    },
    {
      id: "#10432",
      product: "Office Papers",
    },
  ],
};

export default dataTableData;
