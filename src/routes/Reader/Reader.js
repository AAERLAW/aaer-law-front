import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "styled-components";

import { useSpeechSynthesis } from "react-speech-kit";
import ReactHtmlParser from "react-html-parser";

// import "bulma/css/bulma.css";
// import "material-design-icons/iconfont/material-icons.css";

import { Tabs, Tab } from "react-bootstrap";

import { Grid } from "../../components/Grid.components";
import { Button } from "../../components/Button.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Alert } from "../../components/Alert.components";
import { EmptyState } from "../../components/EmptyState.components";
import { StyledTabs, Icon } from "../../components/style";

import {
  calcViewMode,
  formatDate,
  truncateText,
  printView,
} from "../../utils/utils";
// import { Theme } from "../../utils/theme";

import { PDFReader } from "./style";

import EditForm from "./EditForm/index";

export const Reader = (props) => {
  // State props received
  const { bookList, activeTab, editFormModal } = props;

  //dispatch props receieved
  const { redirect, saveReader, openEditForm } = props;
  const Theme = useContext(ThemeContext);
  const { speak } = useSpeechSynthesis();

  const [key, setKey] = useState(activeTab);

  let viewMode = calcViewMode();

  // handles the closeing of tabs
  const removeItem = (data) => {
    let newList = [...bookList];
    const existIndex = newList.findIndex(
      (item) => `${item.id}-${item.name}` === `${data.id}-${data.name}`
    );
    if (existIndex > -1) {
      newList.splice(existIndex, 1);
      saveReader({ bookList: [...newList] });
    } else {
      console.log(data);
    }
  };

  return (
    <Boxed
      margin="20px"
      pad="20px 0"
      border={`1px solid ${Theme.PrimaryBorderColor}`}
      borderRadius={Theme.TertiaryRadius}
      bColor={Theme.TertiaryDark}
    >
      {bookList.length > 0 ? (
        <StyledTabs>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            {bookList.map((item) => {
              const { data, type, id } = item;
              if (type === "word") {
                const file = data?.file ? data?.file : "";
                return (
                  <Tab
                    eventKey={id}
                    title={
                      <Text fontWeight="bold">
                        {truncateText(data?.name, 15)}{" "}
                        <Icon
                          onClick={() => removeItem(item)}
                          className="icon icon-x"
                        />
                      </Text>
                    }
                  >
                    <Boxed pad={viewMode === "mobile" ? "0" : "20px"}>
                      <Grid
                        desktop="200px auto"
                        tablet="200px auto"
                        mobile="repeat(1, 1fr)"
                      >
                        <Boxed>
                          <Boxed pad="10px 0">
                            <Button
                              block
                              pale
                              onClick={() => {
                                openEditForm(data);
                              }}
                            >
                              Edit Form
                            </Button>
                          </Boxed>
                          <Boxed pad="10px 0">
                            <Button block onClick={() => printView(file)}>
                              Print Form
                            </Button>
                          </Boxed>
                        </Boxed>
                        <Boxed
                          pad="5px"
                          borderRadius={Theme.PrimaryBorderRadius}
                          background={Theme.PrimaryDark}
                        >
                          <Boxed
                            pad={
                              viewMode === "mobile" ? "10px 5px" : "20px 30px"
                            }
                            background={Theme.TertiaryDark}
                            maxHeight="80vh"
                            overflowY="scroll"
                          >
                            <Text>{ReactHtmlParser(file)}</Text>
                          </Boxed>
                        </Boxed>
                      </Grid>
                    </Boxed>
                  </Tab>
                );
              }
              return (
                <Tab
                  eventKey={id}
                  title={
                    <Text fontWeight="bold">
                      {truncateText(data?.name, 15)}{" "}
                      <Icon
                        onClick={() => removeItem(item)}
                        className="icon icon-x"
                      />
                    </Text>
                  }
                >
                  <Boxed pad={viewMode === "mobile" ? "10px" : "20px"}>
                    <Text fontWeight="600">{data?.name}</Text>
                    <Grid
                      desktop="250px auto"
                      tablet="250px auto"
                      mobile="repeat(1, 1fr)"
                    >
                      <Boxed>
                        {type === "Report" ? (
                          <Boxed pad="10px 0">
                            <Text
                              color={Theme.SecondaryTextColor}
                              fontSize={Theme.SecondaryFontSize}
                            >
                              #Info{" "}
                            </Text>
                            <Text>
                              <ul
                                style={{
                                  margin: 0,
                                  padding: "0.5rem 0",
                                  listStyle: "none",
                                }}
                              >
                                <li>
                                  Citation : <b>{data?.citation}</b>
                                </li>
                                <li>
                                  Suit Number : <b>{data?.suit_number}</b>
                                </li>
                                <li>
                                  Lead Judge : <b>{data?.lead_judgement_by}</b>
                                </li>
                                <li>
                                  Judgement Date :{" "}
                                  <b>
                                    {data?.judgement_date &&
                                      formatDate(data?.judgement_date)}
                                  </b>
                                </li>
                              </ul>
                            </Text>
                            {data?.summary && (
                              <>
                                <Text
                                  color={Theme.SecondaryTextColor}
                                  fontSize={Theme.SecondaryFontSize}
                                >
                                  #Summary{" "}
                                </Text>
                                <Text padding="10px">{data?.summary}</Text>
                                <Button
                                  block
                                  pale
                                  onClick={() => {
                                    speak({ text: data?.summary });
                                  }}
                                >
                                  Read Summary
                                </Button>
                              </>
                            )}
                          </Boxed>
                        ) : null}
                      </Boxed>
                      <Boxed pad="20px">
                        {data?.file && (
                          <PDFReader
                            document={{
                              base64: data?.file,
                            }}
                          />
                        )}
                      </Boxed>
                    </Grid>
                  </Boxed>
                </Tab>
              );
            })}
          </Tabs>
        </StyledTabs>
      ) : (
        <EmptyState title="No file opened" />
      )}
      {editFormModal && <EditForm />}
    </Boxed>
  );
};
