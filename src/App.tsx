import { NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Suspense } from "react";
import { paths } from "./routes/helpers";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Header from "./features/Header/Header";
import { AppStyles, Footer } from "./App.styled";

const App = () => {
  return (
    <>
      <AppStyles />
      <Header />
      <Suspense fallback={"...loading"}>
        <NavLink to={paths.home}>home </NavLink>
        <NavLink to={paths.accountSettings}>account</NavLink>
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>
      <Footer>MarketPlace</Footer>
    </>
  );
};
export default App;
