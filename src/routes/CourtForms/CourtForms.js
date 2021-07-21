import React, { useEffect, useState } from "react";

import { Grid } from "../../components/Grid.components";
import { AsyncSelect } from "../../components/Input.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Loader } from "../../components/Loader.components";
import { PaginationComponent } from "../../components/Table.components";
import { PageTitle } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";

export const CourtForms = (props) => {
  // dispatch props recieved
  const {
    courtFormsList,
    courtFormsTotal,
    createCourtFormModal,
    fetchActionURL,
    isLoading,
    isAdmin,
  } = props;

  // dispatch props recieved
  const { redirect, getAllCourtForms, openCreateModal } = props;
  let viewMode = calcViewMode();
  let errors;

  const [courtLevel, setCourtLevel] = useState("");

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
    };
    getAllCourtForms(data);
  }, []);

  let externalParams = {};
  courtLevel && (externalParams["court_level"] = courtLevel);

  return (
    <Boxed pad="20px">
      {/* <PageTitle>{params.name}</PageTitle> */}
      <Wrapper
        externalActionURL={fetchActionURL}
        externalParams={{ ...externalParams }}
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
                <Boxed width="200px">
                  <AsyncSelect
                    label="Court level"
                    placeholder="Select Court..."
                    options={[
                      { id: null, label: "ALL" },
                      { id: "State", label: "State" },
                      { id: "Federal", label: "Federal" },
                    ]}
                    onChange={(value) => setCourtLevel(value.id)}
                  />
                </Boxed>
                {isAdmin && (
                  <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
                    Create Court Form
                  </Button>
                )}
              </Boxed>
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={courtFormsTotal}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
                  current={currentPage}
                  pageCounts={pageOptions}
                  changePageSize={(pageSize) =>
                    changePageSize(pageSize, fetchActionURL)
                  }
                  pageSize={pageSize}
                  itemsDisplayed
                  showTotal={(total, range) => {
                    return `${range[0]} - ${range[1]} of ${courtFormsTotal} items`;
                  }}
                />
              </Boxed>
              {isLoading ? (
                <Boxed pad="20px 0 " display="flex">
                  <Loader margin="auto" />
                </Boxed>
              ) : (
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
                    {courtFormsTotal > 0
                      ? courtFormsList.map((item, index) => {
                          return (
                            <Boxed
                              key={index}
                              pad="5px 10px"
                              cursor="pointer"
                              borderRadius={Theme.PrimaryRadius}
                              margin="5px"
                              bColor={Theme.TertiaryDark}
                              hoverBColor={`${Theme.PrimaryColor}20`}
                              display="flex"
                              style={{ flexFlow: "column" }}
                              onClick={() =>
                                redirect(
                                  `/court-forms/items`,
                                  `?court_form_id=${item.id}&name=${item.title}`
                                )
                              }
                            >
                              <Text>
                                {item.title} <br />
                              </Text>
                              {/* <Text
                                color={Theme.SecondaryTextColor}
                                margin="auto 0 0 0"
                              >
                                {item.year}
                              </Text> */}
                            </Boxed>
                          );
                        })
                      : null}
                  </Grid>
                </Boxed>
              )}
            </>
          );
        }}
      />
      {createCourtFormModal ? <CreateModal /> : null}
    </Boxed>
  );
};
