import React, { useEffect } from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { PaginationComponent } from "../../components/Table.components";
import { PageTitle } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
import { Theme } from "../../utils/theme";

export const MDAsRegulation = (props) => {
  const { regulationList, regulationTotal, params, fetchActionURL } = props;

  const { redirect, getAllMDAsRegulations } = props;
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
      regulation_id: params.regulation_id,
    };
    getAllMDAsRegulations(data);
  }, []);

  return (
    <Boxed pad="20px">
      <PageTitle>{params.name}</PageTitle>
      <Wrapper
        externalParams={{ regulation_id: params.regulation_id }}
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          filter,
        }) => {
          return (
            <>
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={regulationTotal}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
                  current={currentPage}
                  pageCounts={pageOptions}
                  changePageSize={(pageSize) =>
                    changePageSize(pageSize, fetchActionURL)
                  }
                  pageSize={pageSize}
                  itemsDisplayed
                  showTotal={(total, range) => {
                    return `${range[0]} - ${range[1]} of ${regulationTotal} items`;
                  }}
                />
              </Boxed>
              <Boxed
                bColor={Theme.SecondaryDark}
                pad="20px"
                borderRadius="20px"
                flexWrap="wrap"
              >
                <Grid
                  desktop="repeat(3, 1fr)"
                  tablet="repeat(2,1fr)"
                  mobile="repeat(1, 1fr)"
                >
                  {regulationTotal > 0
                    ? regulationList.map((item, index) => {
                        return (
                          <Boxed
                            key={index}
                            pad="5px 10px"
                            cursor="pointer"
                            borderRadius={Theme.PrimaryRadius}
                            onClick={() => console.log(item.id)}
                            margin="5px"
                            bColor={Theme.TertiaryDark}
                            hoverBColor={`${Theme.PrimaryColor}20`}
                            display="flex"
                            style={{ flexFlow: "column" }}
                          >
                            <Text>
                              {item.name} <br />
                            </Text>
                            <Text
                              color={Theme.SecondaryTextColor}
                              margin="auto 0 0 0"
                            >
                              {item.year}
                            </Text>
                          </Boxed>
                        );
                      })
                    : null}
                </Grid>
              </Boxed>
            </>
          );
        }}
      />
    </Boxed>
  );
};
