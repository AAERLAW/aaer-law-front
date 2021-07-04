import React from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";

import SUB_BG from "../../assets/img/sub-bg.png";
import STUDENTS from "../../assets/img/students.png";
import LEGAL_PRACTITIONER from "../../assets/img/legal-practitioner.png";
import { Theme } from "../../utils/theme";

export const Features = (props) => {
  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return (
    <>
      <Boxed
        width="100%"
        pad="0"
        height="100%"
        display="flex"
        position="relative"
        minHeight="100vh"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Grid desktop="60% 40%" tablet="50% 50%" mobile="100%">
            <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
              <Boxed margin="auto">i am the video</Boxed>
            </Boxed>
            <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
              i am the info
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
    </>
  );
};
