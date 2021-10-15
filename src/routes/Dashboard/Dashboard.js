import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Loader } from "../../components/Loader.components";
import { PageTitle, Icon } from "../../components/style";

import {
  calcViewMode,
  formatDate,
  formatCount,
  truncateText,
} from "../../utils/utils";
import { Thumb } from "../../assets/svg/thumb.js";

import LOGO from "../../assets/img/logo.png";
// import { Theme } from "../../utils/theme";

export const Dashboard = (props) => {
  // state props recieved
  const {
    profile,
    judgementList,
    judgementTotal,
    regulationList,
    regulationTotal,
    formList,
    formTotal,
    loadingReports,
    loadingRegulationItems,
    loadingForms,
    isAdmin,
  } = props;

  // dispatch props received
  const { redirect, getDashboardStats } = props;

  const Theme = useContext(ThemeContext);

  useEffect(() => {
    getDashboardStats({ page: 1, size: 5 });
  }, []);

  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed pad="20px" display="flex">
      <Boxed margin="0 auto" pad="3% 0 0 0" width="100%">
        <Boxed margin="0 0 0 40px">
          <PageTitle fontSize="24px" color={Theme.PrimaryTextColor}>
              Welcome back 👋🏽,{" "}
// Welcome back <Thumb />,{" "}
          </PageTitle>
          <Text fontSize="24px">{profile?.username}</Text>
        </Boxed>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(3, 1fr)"
          mobile="repeat(1, 1fr)"
          pad="20px 0 0 0"
        >
          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryTextColor}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              Law Reports{" "}
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
            <Text fontWeight="light">3 New Updates</Text>
          </Boxed>

          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryColor}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              Rules & Regulation
              <Icon
                className="icon icon-codepen"
                fontSize="16px"
                margin="auto 0 auto auto"
                color={Theme.PrimaryTextColor}
              />
            </Text>
            <Text fontWeight="bold" padding="15px 0 5px 0" fontSize="24px">
              {formatCount(regulationTotal || 0)}+
            </Text>
            <Text fontWeight="light">2 New Updates</Text>
          </Boxed>

          {!isAdmin && (
            <Boxed
              margin="0.25rem"
              pad="20px"
              borderRadius={Theme.SecondaryRadius}
              background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryYellow}40)`}
              boxShadow={Theme.PrimaryShadow}
            >
              <Text fontWeight="bold" display="flex">
                You are currently using the Basic Plan
              </Text>

              <Text padding="25px 0 0 0" fontWeight="bold" fontSize="24px">
                335
              </Text>
              <Text fontWeight="light">Days to go</Text>
            </Boxed>
          )}
        </Grid>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(2, 1fr)"
          mobile="repeat(1, 1fr)"
          pad="20px 0 0 0"
        >
          {/* ############   R E P O R T   U P D A T E S   ############ */}
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
            pad="10px 0"
          >
            <Text fontWeight="bold" padding="10px">
              Latest Reports
            </Text>
            {loadingReports ? (
              <Boxed display="flex" pad="10px">
                <Loader margin="auto" />
              </Boxed>
            ) : (
              <>
                {judgementList.length > 0 &&
                  judgementList.map((item, index) => (
                    <Grid
                      key={index}
                      desktop="auto 40px"
                      tablet="auto 40px"
                      mobile="auto 40px"
                      background={index % 2 > 0 && Theme.PrimaryDark}
                    >
                      <Boxed pad="10px ">
                        <Text color={Theme.SecondaryTextColor} fontWeight>
                          {item.case_title && truncateText(item.case_title, 27)}
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
              </>
            )}
          </Boxed>

          {/* ############   F O R M S   U P D A T E S   ############ */}
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
            pad="10px 0"
          >
            <Text fontWeight="bold" padding="15px 10px">
              LATEST FORMS
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
            {loadingReports ? (
              <Boxed display="flex" pad="10px">
                <Loader margin="auto" />
              </Boxed>
            ) : (
              <>
                {formList.length > 0 &&
                  formList.map((item, index) => (
                    <Grid
                      key={index}
                      desktop="auto 40px"
                      tablet="auto 40px"
                      mobile="auto 40px"
                      background={index % 2 > 0 && Theme.PrimaryDark}
                    >
                      <Boxed pad="10px ">
                        <Text color={Theme.SecondaryTextColor} fontWeight>
                          {item.case_title && truncateText(item.case_title, 27)}
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
              </>
            )}
          </Boxed>

          {/* ############   R E G U L A T I O N S   U P D A T E S   ############ */}
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
            pad="20px 0"
          >
            <Text fontWeight="bold" padding="15px 10px">
              RECENT REGULATIONS
            </Text>
            {loadingReports ? (
              <Boxed display="flex" pad="10px">
                <Loader margin="auto" />
              </Boxed>
            ) : (
              <>
                {regulationList.length > 0 &&
                  regulationList.map((item, index) => (
                    <Grid
                      key={index}
                      desktop="auto 40px"
                      tablet="auto 40px"
                      mobile="auto 40px"
                      background={index % 2 > 0 && Theme.PrimaryDark}
                    >
                      <Boxed pad="10px ">
                        <Text color={Theme.SecondaryTextColor} fontWeight>
                          {item.name && truncateText(item.name, 27)}
                        </Text>
                      </Boxed>
                      <Boxed display="flex">
                        <Icon margin="auto" className="icon icon-file-text" />
                      </Boxed>
                    </Grid>
                  ))}
              </>
            )}
          </Boxed>
        </Grid>
      </Boxed>
    </Boxed>
  );
};
