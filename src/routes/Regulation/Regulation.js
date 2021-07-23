import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Button } from "../../components/Button.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { PaginationComponent } from "../../components/Table.components";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";
import { Loader } from "../../components/Loader.components";

export const MDAs = (props) => {
  // State props received
  const {
    fetchActionURL,
    regulationList,
    regulationTotal,
    createModal,
    isLoading,
    isAdmin,
  } = props;

  //dispatch props receieved
  const { redirect, getRegulations, openCreateModal } = props;

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
    };
    getRegulations(data);
  }, []);

  return (
    <Boxed pad="20px">
      <Boxed pad="10px 0" display="flex">
        {isAdmin && (
          <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
            Create Regulation
          </Button>
        )}
      </Boxed>

      <Wrapper
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
                display="flex"
                borderRadius="20px"
                flexWrap="wrap"
              >
                {isLoading ? (
                  <Boxed display="flex" width="100%">
                    <Loader margin="auto" />
                  </Boxed>
                ) : (
                  <>
                    {regulationTotal > 0
                      ? regulationList.map((item, index) => {
                          return (
                            <Text
                              key={index}
                              padding="5px 10px"
                              margin="5px"
                              cursor="pointer"
                              bColor={Theme.TertiaryDark}
                              hoverBColor={`${Theme.PrimaryColor}20`}
                              borderRadius="15px"
                              onClick={() =>
                                redirect(
                                  "/regulation/items",
                                  `?regulation_id=${item.id}&name=${item.name}`
                                )
                              }
                            >
                              {item.name}
                            </Text>
                          );
                        })
                      : null}
                  </>
                )}
              </Boxed>
            </>
          );
        }}
      />
      {createModal ? <CreateModal /> : null}
    </Boxed>
  );
};
