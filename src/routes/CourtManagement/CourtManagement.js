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

import CourtModal from "./CreateCourt/index";
import { Button } from "../../components/Button.components";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "rule_date",
    key: "rule_date",
    align: "right",
    render: (text) => text && formatDate(text),
  },
];

export const CourtManagement = (props) => {
  // state props receieved
  const { isLoading, courts, courtsTotal, fetchActionURL, createCourtModal } =
    props;

  // dispatch props recieved
  const { redirect, getAllCourts, openCourtModal } = props;
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = { size: 10, page: 1 };
    getAllCourts(data);
  }, []);

  return (
    <Boxed pad="20px">
      <Boxed
        pad="10px"
        bColor={Theme.TertiaryDark}
        borderRadius={Theme.SecondaryRadius}
      >
        <Boxed pad="10px 0" display="flex">
          <Button margin="0 0 0 auto" onClick={() => openCourtModal()}>
            Create Court
          </Button>
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
                    total={courtsTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${courtsTotal} items`;
                    }}
                  />
                </Boxed>
                <TableComponent columns={columns} data={courts} />
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={courtsTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${courtsTotal} items`;
                    }}
                  />
                </Boxed>
              </Boxed>
            );
          }}
        />
      </Boxed>
      {createCourtModal ? <CourtModal /> : null}
    </Boxed>
  );
};
