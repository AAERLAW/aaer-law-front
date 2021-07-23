import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Loader } from "../../components/Loader.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../components/Table.components";
import { PageTitle, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";

export const CourtRules = (props) => {
  // state props receieved
  const {
    isLoading,
    rules,
    rulesTotal,
    fetchActionURL,
    createRuleModal,
    isAdmin,
  } = props;

  // dispatch props recieved
  const { redirect, getAllRules, openCreateModal, openReader } = props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = { size: 10, page: 1 };
    getAllRules(data);
  }, []);

  const columns = [
    {
      title: "Tiltle",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Text onClick={() => openReader(record)} cursor="pointer">
          {text}
        </Text>
      ),
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

  return (
    <Boxed pad="20px">
      <Boxed
        pad="10px"
        bColor={Theme.TertiaryDark}
        borderRadius={Theme.SecondaryRadius}
      >
        <Boxed pad="10px 0" display="flex">
          {isAdmin && (
            <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
              Create Rule
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
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={rulesTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${rulesTotal} items`;
                    }}
                  />
                </Boxed>
                {isLoading ? (
                  <Boxed pad="20px 0" display="flex" width="100%">
                    <Loader margin="auto" />
                  </Boxed>
                ) : (
                  <TableComponent columns={columns} data={rules} />
                )}
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={rulesTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${rulesTotal} items`;
                    }}
                  />
                </Boxed>
              </Boxed>
            );
          }}
        />
      </Boxed>
      {createRuleModal && <CreateModal />}
    </Boxed>
  );
};
