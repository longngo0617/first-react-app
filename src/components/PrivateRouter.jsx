import { useAuth } from "../hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
const PrivateRouter = ({ children, ...rest }) => {
  let { user } = useAuth();

  return (
    <Route
      {...rest}
      render={() => (user._id ? children : <Redirect to="/sign-up" />)}
    />
  );
};

export default PrivateRouter;
