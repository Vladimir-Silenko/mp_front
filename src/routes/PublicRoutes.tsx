import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { checkPathName, paths } from "./helpers";
// import ProductDetails from "../pages/productDetailsPage/ProductDetails";
// --------
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const ProductDetails = React.lazy(
  () => import("../pages/productDetailsPage/ProductDetails")
);
const PublicRoutes = () => {
  const location = useLocation();
  const isMatch = checkPathName(location.pathname, paths);
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.ProductDetails} element={<ProductDetails />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PublicRoutes;
