import React, { useEffect } from "react";

import { Tabs, Tab } from "react-bootstrap";

import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { PaginationComponent } from "../../components/Table.components";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
import { Theme } from "../../utils/theme";

export const FederationLaws = (props) => {
  const { fetchActionURL, redirect, getFederalLaws } = props;
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 1,
    };
    getFederalLaws(data);
  }, []);

  return (
    <Boxed pad="20px">
      <Wrapper
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          filter,
        }) => {
          console.log("pageSize", pageSize);
          console.log("currentPage", currentPage);
          console.log("filter", filter);
          return (
            <>
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={40}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
                  current={currentPage}
                  pageCounts={pageOptions}
                  changePageSize={(pageSize) =>
                    changePageSize(pageSize, fetchActionURL)
                  }
                  pageSize={pageSize}
                  itemsDisplayed
                  showTotal={(total, range) => {
                    return `${range[0]} - ${range[1]} of ${40} items`;
                  }}
                />
              </Boxed>
              <Boxed
                bColor={Theme.SecondaryDark}
                pad="20px"
                display="flex"
                borderRadius="20px"
                flexWrap="wrap"
              >
                <Text
                  padding="5px 10px"
                  margin="5px"
                  cursor="pointer"
                  bColor={Theme.TertiaryDark}
                  hoverBColor={`${Theme.PrimaryColor}20`}
                  borderRadius="15px"
                >
                  ABUBAKAR TAFAWA BALEWA UNIVERSITY, BAUCHI ACT 1988
                </Text>{" "}
                <Text
                  padding="5px 10px"
                  margin="5px"
                  cursor="pointer"
                  bColor={Theme.TertiaryDark}
                  hoverBColor={`${Theme.PrimaryColor}20`}
                  borderRadius="15px"
                >
                  ACTS AUTHENTICATION ACT (1962)
                </Text>{" "}
                <Text
                  padding="5px 10px"
                  margin="5px"
                  cursor="pointer"
                  bColor={Theme.TertiaryDark}
                  hoverBColor={`${Theme.PrimaryColor}20`}
                  borderRadius="15px"
                >
                  ADMINISTRATION OF CRIMINAL JUSTICE ACT (2015)
                </Text>{" "}
                <Text
                  padding="5px 10px"
                  margin="5px"
                  cursor="pointer"
                  bColor={Theme.TertiaryDark}
                  hoverBColor={`${Theme.PrimaryColor}20`}
                  borderRadius="15px"
                >
                  ADMIRALTY JURISDICTION ACT (1991)
                </Text>
              </Boxed>
            </>
          );
        }}
      />
    </Boxed>
  );
};
