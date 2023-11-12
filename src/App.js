import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignInSide from "./pages/SignInSide";
import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import PerRelawan from "./pages/PerRelawan";
import PerWilayah from "./pages/PerWilayah";
import PerHari from "./pages/PerHari";
import NotFound from "./pages/NotFound";
import "devextreme/dist/css/dx.light.css";
import { UserProvider, UserContext } from "./context/UserContext";

const App = () => {
  const navigate = useNavigate();
  const userContext = React.useContext(UserContext);
  // eslint-disable-next-line
  const { isLoggedIn, logout } = userContext || {};

  React.useEffect(() => {
    if (!isLoggedIn) {
      // logout();
      // logout();
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  if (isLoggedIn) {
    navigate("/login");
  }
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<SignInSide />} />
          <Route element={<Navigation />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/per-relawan" element={<PerRelawan />} />
            <Route path="/per-wilayah" element={<PerWilayah />} />
            <Route path="/per-hari" element={<PerHari />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;
