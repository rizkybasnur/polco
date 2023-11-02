import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignInSide from "./pages/SignInSide";
import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import PerRelawan from "./pages/PerRelawan";
import PerWilayah from "./pages/PerWilayah";
import PerHari from "./pages/PerHari";
import NotFound from "./pages/NotFound";
import 'devextreme/dist/css/dx.light.css';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignInSide />} />
        <Route element={<Navigation />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/per-relawan" element={<PerRelawan />} />
          <Route path="/per-wilayah" element={<PerWilayah />} />
          <Route path="/per-hari" element={<PerHari />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
