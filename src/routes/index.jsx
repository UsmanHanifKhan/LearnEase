import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Index";
import Customer from "../pages/Customer";
import Dashboard from "../pages/dashboard/Index";
import Clients from "../pages/clients/Index";
import Invoices from "../pages/invoices/Index";
import AddClient from "../pages/clients/AddClient";
import AddInvoice from "../pages/invoices/AddInvoice";
import InvoiceDetails from "../pages/invoices/InvoiceDetails";
const Routers = () => {
  return (
      <BrowserRouter >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard/>
              </Layout>
            }
          />
          <Route
            path="/clients"
            element={
              <Layout>
                <Clients />
              </Layout>
            }
          />
          <Route
            path="/clients/addclient"
            element={
              <Layout>
                <AddClient />
              </Layout>
            }
          />
           <Route
            path="/invoices"
            element={
              <Layout>
                <Invoices/>
              </Layout>
            }
          />
          <Route
            path="/invoices/addinvoice"
            element={
              <Layout>
                <AddInvoice />
              </Layout>
            }
          />
          <Route
            path="/invoices/invoicedetails"
            element={
              <Layout>
                <InvoiceDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
  );
};

export default Routers;
