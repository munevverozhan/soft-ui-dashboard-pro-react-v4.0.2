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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Sweet Alerts page components
import Success from "layouts/pages/sweet-alerts/components/Success";
import WithAttachedFunction from "layouts/pages/sweet-alerts/components/WithAttachedFunction";

function SweetAlerts() {
  return (
    <DashboardLayout>
      <SoftBox mt={3} mb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <SoftBox mt={6} textAlign="center">
              <SoftTypography variant="h2" fontWeight="bold">
                Sweet Alert
              </SoftTypography>
              <SoftBox mt={1} mb={2}>
                <SoftTypography variant="body2" color="text">
                  A beautiful plugin, that replace the classic alert, Handcrafted by our friend{" "}
                  <SoftTypography
                    component="a"
                    href="https://twitter.com/t4t5"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                  >
                    Tristan Edwards.
                  </SoftTypography>{" "}
                  Please check out the{" "}
                  <SoftTypography
                    component="a"
                    href="https://sweetalert2.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                  >
                    full documentation.
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox mt={3}>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8} container spacing={3}>
              <Grid item xs={12} md={4}>
                <Success />
              </Grid>
              <Grid item xs={12} md={4}>
                <WithAttachedFunction />
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default SweetAlerts;
