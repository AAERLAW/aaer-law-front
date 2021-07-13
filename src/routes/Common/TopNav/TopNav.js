import React from "react";

import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Button } from "../../../components/Button.components";

import { calcViewMode } from "../../../utils/utils";

import LOGO_FULL from "../../../assets/img/logo-full.png";
import { HeaderNav } from "../../style";

export const TopNav = (props) => {
  const { redirect } = props;
  return (
    <>
      <Boxed>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(3, 1fr)"
          mobile="repeat(2, 1fr)"
          pad="10px"
        >
          <Boxed>
            <img src={LOGO_FULL} alt="app_logo" height="40px" />
          </Boxed>
          <Boxed display="flex" align="center">
            <HeaderNav>
              <li>Home</li>
              <li>Feature</li>
              <li>Pricing</li>
            </HeaderNav>
          </Boxed>
          <Boxed align="right">
            <Button margin="5px 0">Login</Button>
          </Boxed>
        </Grid>
      </Boxed>
    </>
  );
};
