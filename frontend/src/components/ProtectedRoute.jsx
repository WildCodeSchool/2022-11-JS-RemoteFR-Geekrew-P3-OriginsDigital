import PropTypes from "prop-types";

import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, redirectPath = "/login", children }) {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
}

ProtectedRoute.defaultProps = {
  isAllowed: false,
  redirectPath: "/login",
  children: null,
};
ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};

export default ProtectedRoute;
