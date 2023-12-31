/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

import { useEffect, useState } from "react";
import { formatPrice } from "utils/formaPrice";
import { dateToLocalDate } from "utils/dateFormat";
import CharBar2 from "../Chart2/CharBar2";
import TotalProducts from "../TotalProducts/TotalProducts";
import TotalProductsProfit from "../TotalProducts/TotalProductsProfit";
import CharBar3 from "../Chart3/CharBar3";
import TotalClientsDebt from "../ClientDebt/TotalClientDebt";
import TotalClientsBuy from "../ClientBuy/TotalClientBuy";
import TotalClientsProfits from "../ClientProfit/TotalClientProfit";
import CharBar1 from "../Chart1/CharBar1";

function DashboardTotals({
  orders,
  clients,
  ordersByDays,
  reports,
  totalProducts,
  totalProducts2103,
  dataOrdersByMonth,
  dataClientsDebs,
  reportTotalClientBuy,
}) {
  const [updateDate, setUpdateDate] = useState(null);

  const totalClients = clients.length;

  useEffect(() => {
    setUpdateDate(dateToLocalDate(new Date()));
  }, []);

  const totalActivesClients = clients.filter((client) => client.active).length;

  return (
    <MDBox py={3} mt={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              color="dark"
              icon="person_add"
              title="Clientes Activos"
              count={totalActivesClients}
              percentage={{
                color: "success",
                amount: "",
                label: `Total clientes ${totalClients}`,
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              icon="leaderboard"
              title="Ventas"
              count={formatPrice(orders[0]?.totalSales || 0)}
              percentage={{
                color: "success",
                amount: "",
                label: `Actualizado ${updateDate}hs`,
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              color="success"
              icon="file_download_done_icon"
              title="Pagos clientes"
              count={formatPrice(
                orders[0]?.totalCash && orders[0]?.totalTransfer
                  ? orders[0].totalCash + orders[0].totalTransfer
                  : 0
              )}
              percentage={{
                color: "success",
                amount: "",
                label: `Actualizado ${updateDate}hs`,
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              color="primary"
              icon="cancel_presentation_icon"
              title="Deudas clientes"
              count={formatPrice(orders[0]?.totalDebt || 0)}
              percentage={{
                color: "success",
                amount: "",
                label: `Actualizado ${updateDate}hs`,
              }}
            />
          </MDBox>
        </Grid>
      </Grid>

      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={3}>
              <CharBar1 ordersByDays={ordersByDays} />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={3}>
              <CharBar2 reports={reports} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={3}>
              <CharBar3 reports={dataOrdersByMonth} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <TotalProducts totalProducts={totalProducts} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TotalProductsProfit totalProducts={totalProducts2103} />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <TotalClientsDebt clients={dataClientsDebs} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TotalClientsBuy clients={reportTotalClientBuy} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TotalClientsProfits clients={reportTotalClientBuy} />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default DashboardTotals;
