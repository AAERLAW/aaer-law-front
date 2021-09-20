import React from "react";

import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Button } from "../../../components/Button.components";

import { calcViewMode } from "../../../utils/utils";

import LOGO_FULL from "../../../assets/img/aaer-logo.png";
import { HeaderNav } from "../../style";

export const TopNav = (props) => {
  const { redirect } = props;
  const viewMode = calcViewMode();
  return (
    <>
      <Boxed>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(3, 1fr)"
          mobile="120px auto"
          pad="10px 30px 10px 30px"
        >
          <Boxed>
            <img src={LOGO_FULL} alt="app_logo" height="40px" />
          </Boxed>
          {viewMode !== "mobile" && (
            <Boxed display="flex" align="center">
              <HeaderNav>
                <li onClick={() => redirect("/")}>Home</li>
                <li onClick={() => redirect("/features")}>Feature</li>
                <li onClick={() => redirect("/pricing")}>Pricing</li>
              </HeaderNav>
            </Boxed>
          )}
          <Boxed align="right">
          {viewMode !== "mobile" && (
            <Button
              margin="5px 0"
              pale
              onClick={() => redirect("/registration")}
            >
              Register
            </Button>)}
            <Button margin="5px 0" onClick={() => redirect("/login")}>
              Login
            </Button>
          </Boxed>
        </Grid>
      </Boxed>
    </>
  );
};
