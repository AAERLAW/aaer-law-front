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

import JudgementList from "./JudgementList/index";

import { StyledTabs } from "./style";

export const LatestJudgement = (props) => {
  const [key, setKey] = useState("ALL");

  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed
      margin="20px"
      pad="20px 0"
      border={`1px solid ${Theme.PrimaryBorderColor}`}
      borderRadius={Theme.TertiaryRadius}
      bColor={Theme.TertiaryDark}
    >
      <StyledTabs>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="ALL" title="ALL">
            <JudgementList title="ALL JUDGEMENTS" />
          </Tab>
          {/* <Tab eventKey="SUPREME_COURT" title="SUPREME_COURT">
            <JudgementList title="SUPREME COURT" />
          </Tab>
          <Tab eventKey="AAQR" title="AAQR">
            <JudgementList title="AAQR" />
          </Tab>
          <Tab eventKey="DISABLED" title="DISABLED" disabled>
            <JudgementList title="DISABLED" />
          </Tab> */}
        </Tabs>
      </StyledTabs>
    </Boxed>
  );
};
