import React, { useState, useEffect } from "react";

import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../../components/Table.components";
import { PageTitle, Icon } from "../../../components/style";

import Wrapper from "../../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../../utils/utils";
import { pageOptions } from "../../../utils/constant";
import { Theme } from "../../../utils/theme";

const columns = [
  {
    title: "Case Tiltle",
    dataIndex: "case_title",
    key: "case_title",
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
    render: (text) => text && formatDate(text),
  },
];

export const JudgementList = (props) => {
  // state props recieved
  const { judgementList, judgementTotal } = props;
  // dispatch props received
  const { fetchActionURL, getAllJudgements } = props;
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
    <Boxed pad="10px" bColor={Theme.TertiaryDark}>
      <Boxed display="flex">
        <PageTitle>{props.title}</PageTitle>
        <Icon className="icon-refresh" style={{ margin: "0 0 0 auto" }} />
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
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={judgementTotal}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
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
                  onChange={(page) => handlePagination(page, fetchActionURL)}
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
            </Boxed>
          );
        }}
      />
    </Boxed>
  );
};
