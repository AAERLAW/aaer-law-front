import React from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";

import HOME_2 from "../../assets/img/home-2.png";

import { Theme } from "../../utils/theme";

import TopNav from "../Common/TopNav/index";
import Footer from "../Common/Footer/index";

export const Features = (props) => {
  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return (
    <>
      <TopNav />
      <Boxed
        width="100%"
        pad="0"
        height="100%"
        display="flex"
        position="relative"
        minHeight="60vh"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Grid desktop="60% 40%" tablet="50% 50%" mobile="100%">
            <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
              <Boxed pad="20px 10px" margin="auto" minHeight="300px">
                <img src={HOME_2} width="100%" alt="home-2" />
              </Boxed>
            </Boxed>
            <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="24px" fontWeight="bold">
                  All the features of AAER in one Dashboard
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dictum ipsum gravida augue sed id. bibendum a. In egestas
                  facilisis consectetur a ut pellentesque blandit nisl odio. Sem
                  odio nulla morbi sapien egestas volutpat.
                </Text>
              </Boxed>
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
      <Footer />
    </>
  );
};
