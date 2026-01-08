import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Analytics from "../pages/analytics/Analytics";
import Customers from "../pages/customers/Customers";
import Employees from "../pages/employees/Employees";
import Orders from "../pages/orders/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App