import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "dva";
import { withRouter } from "dva/router";

import HeaderLayout from "./Layouts/headerLayout/index";
import BodyLayout from "./Layouts/bodyLayout/index";

import { AlertComponent } from "../components/Alert.components";
import { Boxed } from "../components/Boxed.components";

import { Theme, Theme2 } from "../utils/theme";

const App = (props) => {
  const { children, openRoutes, history } = props;
  console.log(props.app);
  const { nightMode } = props.app;
  const exist =
    openRoutes.findIndex((item) => item === history.location.pathname) > -1;
  return (
    <React.Fragment>
      <ThemeProvider theme={exist || !nightMode ? Theme : Theme2}>
        <React.Fragment>
          {exist ? (
            <Boxed minHeight="100vh">{children}</Boxed>
          ) : (
            <React.Fragment>
              <BodyLayout>
                <HeaderLayout />
                <div />
                <div className="body-layout-children">{children}</div>
              </BodyLayout>
            </React.Fragment>
          )}
          <AlertComponent
            stack={{ limit: 3, spacing: 10 }}
            effect="slide"
            position="top-right"
            offset={10}
          />
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withRouter(connect(({ app }) => ({ app }))(App));
