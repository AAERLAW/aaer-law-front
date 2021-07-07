import React, { useState } from "react";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PageTitle } from "../../components/style";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import { Theme } from "../../utils/theme";

export const Dashboard = (props) => {
  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return <Boxed pad="20px">i am the user management UI</Boxed>;
};
