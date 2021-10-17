import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "styled-components";
import Upload from "rc-upload";
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
  getBase64,
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

  const editorRef = useRef(null);
  const [form, setForm] = useState("");
  const Theme = useContext(ThemeContext);

  const [key, setKey] = useState(activeTab);
  const [file, setFile] = useState({});

  let viewMode = calcViewMode();
  let errors;

  //
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
  // handle logic for uploading an image
  const beforeUpload = (file) => {
    console.log(file);
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      Alert.error("You can only upload PDF file!");
    }
    const isLt100M = file.size / 1024 / 1024 < 100;
    if (!isLt100M) {
      Alert.error("Image must be smaller than 100MB!");
    }
    if (isPDF && isLt100M) {
      handleFileUploader(file);
      return isPDF && isLt100M;
    }
  };

  const handleFileUploader = (file) => {
    getBase64(file).then((data) => {
      const base64Data = data.split(",")[1];
      setFile({
        pdf: file,
        base64: base64Data,
        format: file.type,
        name: file.name,
      });
      console.log(base64Data);
    });
  };

  const handleEditorChange = (content) => {
    this.setForm(content);
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
                  <Boxed pad="20px">
                    {data?.file && (
                      <PDFReader
                        document={{
                          base64: data?.file,
                        }}
                      />
                    )}
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
