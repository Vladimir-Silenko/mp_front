import { NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Suspense } from "react";
import { paths } from "./routes/helpers";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
const App = () => {
  return (
    <Suspense fallback={"...loading"}>
      <NavLink to={paths.home}>home </NavLink>
      <NavLink to={paths.accountSettings}>account</NavLink>
      <PublicRoutes />
      {/* <PrivateRoutes /> */}
    </Suspense>
  );
};
export default App;
