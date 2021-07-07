import React, { useEffect } from "react";

import { Boxed } from "../../components/Boxed.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../components/Table.components";
import { PageTitle, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
import { Theme } from "../../utils/theme";

const columns = [
  {
    title: "Tiltle",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Jurisdiction",
    dataIndex: "jurisdiction",
    key: "jurisdiction",
  },
  {
    title: "Date",
    dataIndex: "rule_date",
    key: "rule_date",
    align: "right",
    render: (text) => text && formatDate(text),
  },
];

export const CourtRules = (props) => {
  // state props receieved
  const { isLoading, rules, rulesTotal, fetchActionURL } = props;

  // dispatch props recieved
  const { redirect, getAllRules } = props;
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = { size: 10, page: 1 };
    getAllRules(data);
  }, []);

  return (
    <Boxed pad="20px">
      <Boxed
        pad="10px"
        bColor={Theme.TertiaryDark}
        borderRadius={Theme.SecondaryRadius}
      >
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
                <TableComponent columns={columns} data={rules} />
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
    </Boxed>
  );
};
