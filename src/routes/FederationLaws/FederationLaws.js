import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Button } from "../../components/Button.components";
import { Text } from "../../components/Text.components";
import { Loader } from "../../components/Loader.components";
import { PaginationComponent } from "../../components/Table.components";
import { StyledDrpDown, Icon, PageTitle } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";
import CreateModal from "./CreateModal/index";

export const FederationLaws = (props) => {
  // state props recieved
  const {
    lawsList,
    lawsTotal,
    createLawModal,
    fetchActionURL,
    isLoading,
    isAdmin,
  } = props;

  // dipatch props received
  const { redirect, getFederalLaws, openCreateModal, readLaw, deleteLaw } =
    props;

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
    };
    getFederalLaws(data);
  }, []);

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.name}".`
    );
    confirmation && deleteLaw(item);
  };

  return (
    <Boxed pad="20px">
      <PageTitle>Laws Of The Federation</PageTitle>
      <Boxed display="flex" pad="10px 0">
        {isAdmin && (
          <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
            Create Law
          </Button>
        )}
      </Boxed>
      {isLoading ? (
        <Boxed display="flex" pad="20px">
          <Loader margin="auto" />
        </Boxed>
      ) : (
        <Wrapper
          render={({
            changePageSize,
            handlePagination,
            currentPage,
            pageSize,
          }) => {
            return (
              <>
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={lawsTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${lawsTotal} items`;
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
                  {lawsList &&
                    lawsList.map((item, index) => (
                      <Text
                        key={index}
                        padding="5px 10px"
                        margin="5px"
                        cursor="pointer"
                        bColor={Theme.TertiaryDark}
                        hoverBColor={`${Theme.PrimaryColor}20`}
                        borderRadius="15px"
                      >
                        <span onClick={() => readLaw(item)}>{item.name}</span>
                        {isAdmin && (
                          <Boxed display="inline-block">
                            <StyledDrpDown
                              style={{ margin: "auto 0 auto 10px" }}
                            >
                              <Dropdown>
                                <Dropdown.Toggle variant id="dropdown-basic">
                                  <Icon className="icon icon-more-vertical" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  {/* <Dropdown.Item
                                    onClick={() => openEdit(item)}
                                  >
                                    Edit
                                  </Dropdown.Item> */}
                                  <Dropdown.Item onClick={() => onDelete(item)}>
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </StyledDrpDown>
                          </Boxed>
                        )}
                      </Text>
                    ))}
                </Boxed>
              </>
            );
          }}
        />
      )}

      {createLawModal ? <CreateModal /> : null}
    </Boxed>
  );
};
