import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PageTitle, Icon } from "../../components/style";

import { calcViewMode, formatDate, formatCount } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
// import { Theme } from "../../utils/theme";

export const Dashboard = (props) => {
  // state props recieved
  const {
    profile,
    judgementList,
    judgementTotal,
    regulationItemsList,
    regulationItemsTotal,
    formList,
    formTotal,
    loadingReports,
    loadingRegulationItems,
    loadingForms,
  } = props;

  // dispatch props received
  const { redirect, getDashboardStats } = props;

  const Theme = useContext(ThemeContext);

  useEffect(() => {
    getDashboardStats({ page: 1, size: 10 });
  }, []);

  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed pad="20px" display="flex">
      <Boxed maxWidth="1080px" margin="0 auto" width="100%">
        <PageTitle>Welcome back,</PageTitle>
        <Text fontSize="24px">{profile?.username}</Text>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(3, 1fr)"
          mobile="repeat(1, 1fr)"
          pad="20px 0"
        >
          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryTextColor}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              LAW REPORTS{" "}
              <Icon
                className="icon icon-clipboard"
                fontSize="16px"
                margin="auto 0 auto auto"
                color={Theme.PrimaryTextColor}
              />
            </Text>
            <Text fontWeight="bold" padding="15px 0 5px 0" fontSize="24px">
              {formatCount(judgementTotal || 0)}+
            </Text>
            <Text fontWeight="bold">15 New Update</Text>
          </Boxed>

          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryColor}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              RULES & REGULATION
              <Icon
                className="icon icon-codepen"
                fontSize="16px"
                margin="auto 0 auto auto"
                color={Theme.PrimaryTextColor}
              />
            </Text>
            <Text fontWeight="bold" padding="15px 0 5px 0" fontSize="24px">
              {formatCount(regulationItemsTotal || 0)}+
            </Text>
            <Text fontWeight="bold">12 New Update</Text>
          </Boxed>

          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryBlue}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              YOU ARE CURRENTLY USING THE BASIC PLAN
            </Text>

            <Text padding="25px 0 0 0" fontWeight="bold">
              335 Days to go
            </Text>
          </Boxed>
        </Grid>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(3, 1fr)"
          mobile="repeat(2, 1fr)"
        >
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
          >
            <Text fontWeight="bold" padding="15px 10px">
              Latest Judgement
            </Text>

            {judgementList.length > 0 &&
              judgementList.map((item, index) => (
                <Grid
                  key={index}
                  desktop="auto 40px"
                  tablet="auto 40px"
                  mobile="auto 40px"
                >
                  <Boxed pad="10px ">
                    <Text color={Theme.SecondaryTextColor} fontWeight>
                      {item.case_title}
                    </Text>
                    <Text
                      color={Theme.SecondaryTextColor}
                      fontSize={Theme.SecondaryFontSize}
                    >
                      {formatDate(item.judgement_date)}
                    </Text>
                  </Boxed>
                  <Boxed display="flex">
                    <Icon margin="auto" className="icon icon-file-text" />
                  </Boxed>
                </Grid>
              ))}

            <Grid
              desktop="auto 40px"
              tablet="auto 40px"
              mobile="auto 40px"
              background={Theme.PrimaryDark}
            >
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid
              desktop="auto 40px"
              tablet="auto 40px"
              mobile="auto 40px"
              background={Theme.PrimaryDark}
            >
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>
          </Boxed>
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
          >
            <Text fontWeight="bold" padding="15px 10px">
              LATEST UPDATES
            </Text>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid
              desktop="auto 40px"
              tablet="auto 40px"
              mobile="auto 40px"
              background={Theme.PrimaryDark}
            >
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid
              desktop="auto 40px"
              tablet="auto 40px"
              mobile="auto 40px"
              background={Theme.PrimaryDark}
            >
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>
          </Boxed>
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
          >
            <Text fontWeight="bold" padding="15px 10px">
              RECENT ACTIVITIES
            </Text>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid
              desktop="auto 40px"
              tablet="auto 40px"
              mobile="auto 40px"
              background={Theme.PrimaryDark}
            >
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid
              desktop="auto 40px"
              tablet="auto 40px"
              mobile="auto 40px"
              background={Theme.PrimaryDark}
            >
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>

            <Grid desktop="auto 40px" tablet="auto 40px" mobile="auto 40px">
              <Boxed pad="10px ">
                <Text color={Theme.SecondaryTextColor}>
                  Alpha - File Hosting Service
                </Text>
                <Text color={Theme.SecondaryTextColor}>
                  {formatDate("24/08/2020")}
                </Text>
              </Boxed>
              <Boxed display="flex">
                <Icon margin="auto" className="icon icon-file-text" />
              </Boxed>
            </Grid>
          </Boxed>
        </Grid>
      </Boxed>
    </Boxed>
  );
};
