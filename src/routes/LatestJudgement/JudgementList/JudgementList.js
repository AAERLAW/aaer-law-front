import React, { useState } from "react";

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
    dataIndex: "caseTitle",
    key: "caseTitle",
  },
  {
    title: "Citation",
    dataIndex: "citation",
    key: "citation",
  },
  {
    title: "Lead Judgment by",
    dataIndex: "judgeBy",
    key: "judgeBy",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => text && formatDate(text),
  },
];

const sampleData = [
  {
    key: "1",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "2",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "3",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "4",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "5",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "6",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "7",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "8",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "9",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
  {
    key: "10",
    caseTitle: "7 bistro Ltd & Lagos Gov",
    citation: "(1995)SRC(FP)",
    judgeBy: "Sylvester Umaru",
    date: "24-08-2020",
  },
];

export const JudgementList = (props) => {
  const { fetchActionURL, redirect } = props;
  let viewMode = calcViewMode();
  let errors;

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
          console.log("pageSize", pageSize);
          console.log("currentPage", currentPage);
          console.log("filter", filter);
          return (
            <Boxed pad="10px 0">
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
              <TableComponent columns={columns} data={sampleData} />
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
            </Boxed>
          );
        }}
      />
    </Boxed>
  );
};
