import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Boxed } from "../../../components/Boxed.components";
import { Button } from "../../../components/Button.components";
import { Loader } from "../../../components/Loader.components";
import { Text } from "../../../components/Text.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../../components/Table.components";
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

  const columns = [
    {
      title: "Case Tiltle",
      dataIndex: "case_title",
      key: "case_title",
      render: (text, record) => (
        <Text onClick={() => onRead(record)} cursor="pointer">
          {text}
        </Text>
      ),
    },
    {
      title: "Suit Number",
      dataIndex: "suit_number",
      key: "suit_number",
    },
    {
      title: "Lead Judgment by",
      dataIndex: "lead_judgement_by",
      key: "lead_judgement_by",
    },
    {
      title: "Date",
      dataIndex: "judgement_date",
      key: "judgement_date",
      align: "right",
      render: (text) => text && formatDate(text),
    },
  ];

  return (
    <Boxed pad="10px" bColor={Theme.TertiaryDark}>
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
                  <TableComponent columns={columns} data={judgementList} />
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
