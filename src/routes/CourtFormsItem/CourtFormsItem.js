import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PaginationComponent } from "../../components/Table.components";
import { PageTitle } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";
import { Loader } from "../../components/Loader.components";

export const CourtFormsItem = (props) => {
  // dispatch props recieved
  const {
    courtFormsItemList,
    courtFormsItemTotal,
    params,
    createCourtItemModal,
    fetchActionURL,
    isLoading,
    isAdmin,
  } = props;

  // dispatch props recieved
  const { redirect, getAllCourtFormsItem, openCreateModal } = props;

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
      court_form: params.court_form_id,
    };
    getAllCourtFormsItem(data);
  }, []);

  return (
    <Boxed pad="20px">
      <PageTitle>Court Forms / {params.name}</PageTitle>
      <Wrapper
        externalActionURL={fetchActionURL}
        externalParams={{ court_form: params.court_form_id }}
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          filter,
        }) => {
          return (
            <>
              <Boxed pad="10px 0" display="flex">
                {isAdmin && (
                  <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
                    Create Item
                  </Button>
                )}
              </Boxed>
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={courtFormsItemTotal}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
                  current={currentPage}
                  pageCounts={pageOptions}
                  changePageSize={(pageSize) =>
                    changePageSize(pageSize, fetchActionURL)
                  }
                  pageSize={pageSize}
                  itemsDisplayed
                  showTotal={(total, range) => {
                    return `${range[0]} - ${range[1]} of ${courtFormsItemTotal} items`;
                  }}
                />
              </Boxed>
              {
                <Boxed
                  bColor={Theme.SecondaryDark}
                  pad="20px"
                  borderRadius="20px"
                  flexWrap="wrap"
                >
                  {isLoading ? (
                    <Boxed pad="20px 0 " display="flex">
                      {" "}
                      <Loader margin="auto" />{" "}
                    </Boxed>
                  ) : (
                    <Grid
                      desktop="repeat(3, 1fr)"
                      tablet="repeat(2,1fr)"
                      mobile="repeat(1, 1fr)"
                    >
                      {courtFormsItemTotal > 0
                        ? courtFormsItemList.map((item, index) => {
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
                                onClick={() =>
                                  redirect(
                                    `/court-forms/form`,
                                    `?court_form_item_id=${item.id}&name=${item.title}`
                                  )
                                }
                              >
                                <Text>
                                  {item.title} <br />
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
                  )}
                </Boxed>
              }
            </>
          );
        }}
      />
      {createCourtItemModal ? (
        <CreateModal
          court_form_id={params.court_form_id}
          court_form_name={params.name}
        />
      ) : null}
    </Boxed>
  );
};
