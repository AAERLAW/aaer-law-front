import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PageTitle, Icon } from "../../components/style";

import { calcViewMode, formatDate } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import { Theme } from "../../utils/theme";

export const Search = (props) => {
  // state props recieved
  const { params, profile } = props;

  // dispatch props received
  const { redirect } = props;

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed pad="20px" display="flex">
      <Boxed maxWidth="1080px" margin="0 auto" width="100%">
        <PageTitle>Search Results for "{params?.search}"</PageTitle>
        <Boxed>
          <Boxed
            margin="10px 0"
            pad="20px"
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
          >
            <Text fontWeight="bold">
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC)
            </Text>

            <Text padding="10px 0" color={Theme.SecondaryTextColor}>
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC) the 2nd Applicants‟ Campaign
              Organization, of Wadata Plaza, Wuse Zone 5, Abuja, to which was
              annexed a written address.
            </Text>

            <Text color={Theme.PrimaryColor}>{formatDate("24/08/2020")}</Text>
          </Boxed>
        </Boxed>

        <Boxed>
          <Boxed
            margin="10px 0"
            pad="20px"
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
          >
            <Text fontWeight="bold">
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC)
            </Text>

            <Text padding="10px 0" color={Theme.SecondaryTextColor}>
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC) the 2nd Applicants‟ Campaign
              Organization, of Wadata Plaza, Wuse Zone 5, Abuja, to which was
              annexed a written address.
            </Text>

            <Text color={Theme.PrimaryColor}>{formatDate("24/08/2020")}</Text>
          </Boxed>
        </Boxed>

        <Boxed>
          <Boxed
            margin="10px 0"
            pad="20px"
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
          >
            <Text fontWeight="bold">
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC)
            </Text>

            <Text padding="10px 0" color={Theme.SecondaryTextColor}>
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC) the 2nd Applicants‟ Campaign
              Organization, of Wadata Plaza, Wuse Zone 5, Abuja, to which was
              annexed a written address.
            </Text>

            <Text color={Theme.PrimaryColor}>{formatDate("24/08/2020")}</Text>
          </Boxed>
        </Boxed>

        <Boxed>
          <Boxed
            margin="10px 0"
            pad="20px"
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
          >
            <Text fontWeight="bold">
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC)
            </Text>

            <Text padding="10px 0" color={Theme.SecondaryTextColor}>
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC) the 2nd Applicants‟ Campaign
              Organization, of Wadata Plaza, Wuse Zone 5, Abuja, to which was
              annexed a written address.
            </Text>

            <Text color={Theme.PrimaryColor}>{formatDate("24/08/2020")}</Text>
          </Boxed>
        </Boxed>

        <Boxed>
          <Boxed
            margin="10px 0"
            pad="20px"
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
          >
            <Text fontWeight="bold">
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC)
            </Text>

            <Text padding="10px 0" color={Theme.SecondaryTextColor}>
              Atiku Abubakar & Peoples’ Democratic Party (PDP) v Independent
              National Electoral Commision (INEC), Muhammadu Buhari & All
              Progressives Congress (APC) the 2nd Applicants‟ Campaign
              Organization, of Wadata Plaza, Wuse Zone 5, Abuja, to which was
              annexed a written address.
            </Text>

            <Text color={Theme.PrimaryColor}>{formatDate("24/08/2020")}</Text>
          </Boxed>
        </Boxed>
      </Boxed>
    </Boxed>
  );
};
