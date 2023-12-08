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
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";

const dataTableData = {
  columns: [
    {
      Header: "product",
      accessor: "product",
      Cell: ({ value }) => {
        const [name, data] = value;

        return (
          <DefaultCell
            value={typeof value === "string" ? value : name}
            suffix={data.suffix || false}
          />
        );
      },
    },
  ],

  rows: [
    {
      product: "Nike Sport V2"
    },
    {
      product: "Valvet T-shirt"
    },
    {
      product: ["Leather Wallet", { suffix: "+1 more" }]
    },
    {
      product: "Bracelet Onu-Lino"
    },
    {
      product: ["Phone Case Pink", { suffix: "x 2" }]
    },
    {
      product: "Backpack Niver"
    },
    {
      product: "Adidas Vio"
    },
    {
      product: "Airpods 2 Gen"
    },
    {
      product: "Bracelet Warret"
    },
    {
      product: ["Watter Bottle India", { suffix: "x 3" }]
    },
    {
      product: "Kitchen Gadgets"
    },
    {
      product: "Office Papers"
    },
  ],
};

export default dataTableData;
