import { useEffect } from "react";
import {
  useHistory,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import EditProfile from "./EditProfile";
import Orders from "./Orders";

function Profile({ isLog }) {
  const history = useHistory();
  useEffect(() => {
    if (!isLog) {
      history.push("/");
    }
  }, [isLog, history]);

  const { path, url } = useRouteMatch();
  return (
    <>
      <h1>this is profile</h1>
      <ol>
        <li>
          <Link to={`${url}/EditProfile`}>Edit my profile</Link>
        </li>
        <li>
          <Link to={`${url}/SeeMyOrders`}>see my orders</Link>
        </li>
      </ol>
      <Switch>
        <Route path={`${path}/EditProfile`} component={EditProfile} />
        <Route path={`${path}/SeeMyOrders`} component={Orders} />
      </Switch>
    </>
  );
}

export default Profile;
