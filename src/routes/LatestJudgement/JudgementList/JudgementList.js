import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Button } from "../../../components/Button.components";
import { Loader } from "../../../components/Loader.components";
import { Text } from "../../../components/Text.components";
import { PaginationComponent } from "../../../components/Table.components";
import { PageTitle, Icon } from "../../../components/style";

import Wrapper from "../../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../../utils/utils";
import { pageOptions } from "../../../utils/constant";
// import { Theme } from "../../../utils/theme";

import CreateModal from "./CreateModal/index";

export const JudgementList = (props) => {
  // state props recieved
  const {
    judgementList,
    judgementTotal,
    createJudgementModal,
    isLoading,
    isAdmin,
  } = props;
  // dispatch props received
  const { fetchActionURL, getAllJudgements, openCreateJudgementModal, onRead } =
    props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 0,
      size: 10,
    };
    getAllJudgements(data);
  }, []);

  return (
    <Boxed pad="10px">
      <Boxed display="flex">
        <PageTitle>{props.title}</PageTitle>
        <Icon className="icon-refresh-o" margin="0 0 0 auto" />
      </Boxed>
      <Boxed display="flex">
        {isAdmin && (
          <Button
            margin="0 0 0 auto"
            onClick={() => openCreateJudgementModal()}
          >
            Create Report
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
            <Boxed pad="10px 0">
              {isLoading ? (
                <Boxed pad="20px 0 " display="flex">
                  {" "}
                  <Loader margin="auto" />{" "}
                </Boxed>
              ) : (
                <>
                  <Boxed pad="10px 0 ">
                    <PaginationComponent
                      total={judgementTotal}
                      onChange={(page) =>
                        handlePagination(page, fetchActionURL)
                      }
                      current={currentPage}
                      pageCounts={pageOptions}
                      changePageSize={(pageSize) =>
                        changePageSize(pageSize, fetchActionURL)
                      }
                      pageSize={pageSize}
                      itemsDisplayed
                      showTotal={(total, range) => {
                        return `${range[0]} - ${range[1]} of ${judgementTotal} items`;
                      }}
                    />
                  </Boxed>

                  {judgementList &&
                    judgementList.map((item, index) => (
                      <Boxed
                        key={index}
                        margin="5px 0"
                        pad="20px"
                        bColor={Theme.TertiaryDark}
                        borderRadius={Theme.SecondaryRadius}
                        boxShadow={Theme.PrimaryShadow}
                        onClick={() => onRead(item)}
                        cursor="pointer"
                      >
                        <Text fontWeight="bold">{item.case_title}</Text>

                        <Grid
                          desktop="repeat(2, 1fr)"
                          tablet="repeat(2, 1fr)"
                          mobile="repeat(1, 1fr)"
                          pad="5px 0"
                        >
                          <Text
                            color={Theme.SecondaryTextColor}
                            fontSize={Theme.SecondaryFontSize}
                          >
                            Citation: <b>{item.citation}</b>
                          </Text>
                          <Text
                            color={Theme.SecondaryTextColor}
                            fontSize={Theme.SecondaryFontSize}
                          >
                            Appeal No.: <b>{item.suit_number}</b>
                          </Text>
                        </Grid>
                        <Text
                          padding="5px 0"
                          color={Theme.SecondaryTextColor}
                          fontSize={Theme.SecondaryFontSize}
                        >
                          Lead Judgement: <b>{item.lead_judgement_by}</b>
                        </Text>
                        <Text
                          padding="5px 0"
                          color={Theme.SecondaryTextColor}
                          fontSize={Theme.SecondaryFontSize}
                        >
                          Date of Judgement:
                          <b>{formatDate(item.judgement_date)}</b>
                        </Text>
                      </Boxed>
                    ))}

                  <Boxed pad="10px 0 ">
                    <PaginationComponent
                      total={judgementTotal}
                      onChange={(page) =>
                        handlePagination(page, fetchActionURL)
                      }
                      current={currentPage}
                      pageCounts={pageOptions}
                      changePageSize={(pageSize) =>
                        changePageSize(pageSize, fetchActionURL)
                      }
                      pageSize={pageSize}
                      itemsDisplayed
                      showTotal={(total, range) => {
                        return `${range[0]} - ${range[1]} of ${judgementTotal} items`;
                      }}
                    />
                  </Boxed>
                </>
              )}
            </Boxed>
          );
        }}
      />
      {isAdmin && createJudgementModal ? <CreateModal /> : null}
    </Boxed>
  );
};
