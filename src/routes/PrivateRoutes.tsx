import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { checkPathName, paths } from "./helpers";
// --------
const AccountSettings = React.lazy(
  () => import("../pages/AccountSettingsPage/AccountSettings")
);

const PrivateRoutes = () => {
  const location = useLocation();
  const isMatch = checkPathName(location.pathname, paths);
  return (
    <Routes>
      <Route path={paths.accountSettings} element={<AccountSettings />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PrivateRoutes;
