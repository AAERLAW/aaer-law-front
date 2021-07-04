import React, { useState } from "react";

import { Tabs, Tab } from "react-bootstrap";

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
  const [key, setKey] = useState("ALL");

  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed pad="20px">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="ALL" title="ALL">
          <Boxed></Boxed>i am the home tab
        </Tab>
        <Tab eventKey="SUPREME_COURT" title="SUPREME_COURT">
          SUPREME_COURT
        </Tab>
        <Tab eventKey="AAQR" title="AAQR" disabled>
          i am tab 1
        </Tab>
      </Tabs>
    </Boxed>
  );
};
