import React from "react";
import { Route, Switch, routerRedux, Redirect } from "dva/router";
import App from "./routes/app";
import { storageToken } from "./utils/constant";

// Pages Route Imports
import Login from "./routes/Login/index";
import Registration from "./routes/Registration/index";
import ForgotPassword from "./routes/ForgotPassword/index";
import ResetPassword from "./routes/ResetPassword/index";
import Subscription from "./routes/Subscription/index";
import Features from "./routes/Features/index";
import EmailConfirmation from "./routes/EmailConfirmation/index";

import Dashboard from "./routes/Dashboard/index";
import LatestJudgement from "./routes/LatestJudgement/index";
import FederationLaws from "./routes/FederationLaws/index";

const { ConnectedRouter } = routerRedux;

const registerModel = (app, model) => {
  if (
    !(app._models.filter((m) => m.namespace === model.namespace).length === 1)
  ) {
    app.model(model);
  }
};

const PrivateRoute = (props) => {
  const AuthToken = sessionStorage.getItem(`${storageToken}`);
  if (AuthToken) {
    return <Route {...props} />;
  } else {
    return <Redirect to={{ pathname: "/" }} />;
  }
};

const openRoutes = [
  "/",
  "/forgotpassword",
  "/resetpassword",
  "/subscription",
  "/registration",
  "/confirmation",
];

export function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <App openRoutes={openRoutes} history={history}>
        <Switch>
          {/* #########   S T A R T :   O P E N      U R L S   #########*/}
          <Route
            path="/"
            exact
            render={(props) => {
              return <Login {...props} />;
            }}
          />
          <Route
            path="/registration"
            exact
            render={(props) => {
              return <Registration {...props} />;
            }}
          />
          <Route
            path="/forgotpassword"
            exact
            render={(props) => {
              return <ForgotPassword {...props} />;
            }}
          />
          <Route
            path="/resetpassword"
            exact
            render={(props) => {
              return <ResetPassword {...props} />;
            }}
          />

          <Route
            path="/confirmation"
            exact
            render={(props) => {
              return <EmailConfirmation {...props} />;
            }}
          />

          <Route
            path="/subscription"
            exact
            render={(props) => {
              return <Subscription {...props} />;
            }}
          />
          <Route
            path="/features"
            exact
            render={(props) => {
              return <Features {...props} />;
            }}
          />
          {/* #########   E N D :    O P E N      U R L S   #########*/}

          {/* #########   S T A R T :   G U A R D E D      U R L S   #########*/}
          <Route
            path="/dashboard"
            exact
            render={(props) => {
              return <Dashboard {...props} />;
            }}
          />
          <Route
            path="/latest-judgement"
            exact
            render={(props) => {
              return <LatestJudgement {...props} />;
            }}
          />
          <Route
            path="/federation-laws"
            exact
            render={(props) => {
              return <FederationLaws {...props} />;
            }}
          />

          {/* #########   E N D :    G U A R D E D      U R L S   #########*/}

          <Route
            render={(props) => {
              return <Redirect to={{ pathname: "/" }} />;
            }}
          />
        </Switch>
      </App>
    </ConnectedRouter>
  );
}
