import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { firstUserCheck } from "./components/login/loginAction";
import Catalog from "./containers/Catalog";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginUserReducer);
  useEffect(() => {
    const localeUser=JSON.parse(localStorage.getItem("user"));
    if(localeUser){
      dispatch(firstUserCheck(localeUser));
    }
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        {!user.username&&<Redirect to="/register"></Redirect>}
        {user&&<Redirect to="/catalog"></Redirect>}
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
