import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { pathname } = useLocation();
  const authenticated = !!localStorage.getItem("authToken"); //We then use the '!!' operator to convert the value to a boolean.
  console.log("authenticated", authenticated);
  if (authenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" replace state={{ referrer: pathname }} />;
  }
}
