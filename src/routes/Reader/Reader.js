import React, { useState, useEffect } from "react";
import Upload from "rc-upload";

import PDFViewer from "mgr-pdf-viewer-react";
// import "bulma/css/bulma.css";
// import "material-design-icons/iconfont/material-icons.css";

import { Tabs, Tab } from "react-bootstrap";

import { Button } from "../../components/Button.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Alert } from "../../components/Alert.components";
import { StyledTabs, Icon } from "../../components/style";

import { calcViewMode, getBase64, truncateText } from "../../utils/utils";
import { Theme } from "../../utils/theme";

import { StyledReader } from "./style";

export const Reader = (props) => {
  // State props received
  const { bookList, activeTab } = props;

  //dispatch props receieved
  const { redirect, saveReader } = props;

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

  return (
    <Boxed
      margin="20px"
      pad="20px 0"
      border={`1px solid ${Theme.PrimaryBorderColor}`}
      borderRadius={Theme.TertiaryRadius}
      bColor={Theme.TertiaryDark}
    >
      <StyledTabs>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="BOOK" title="Book">
            <Boxed pad="20px">
              upload file here
              {file.base64 ? (
                <Boxed display="flex">
                  <Icon
                    className="icon-file-text"
                    fontSize="25px"
                    margin="auto 5px auto 0"
                    color={Theme.PrimaryTextColor}
                  />{" "}
                  <Text margin="auto 5px"> {file.name}</Text>{" "}
                  <Button xs pale margin="auto 0" onClick={() => setFile({})}>
                    Remove
                  </Button>
                </Boxed>
              ) : (
                <Upload
                  type="drap"
                  multiple={false}
                  beforeUpload={(pdf) => beforeUpload(pdf)}
                  onChange={() => {}}
                >
                  <Boxed
                    height="150px"
                    width="100%"
                    border={`1px dashed ${Theme.SecondaryTextColor}`}
                    bColor={`${Theme.SecondaryDark}50`}
                    display="flex"
                  >
                    <Boxed margin="auto" align="center">
                      <Icon
                        className="icon-upload-cloud"
                        fontSize="35px"
                        color={Theme.PrimaryTextColor}
                      />
                      <Text>Click or drag pdf file here to upload. </Text>
                    </Boxed>
                  </Boxed>
                </Upload>
              )}
              <hr />
              {file.base64 && (
                <PDFViewer
                  document={{
                    //   url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
                    base64: file.base64,
                  }}
                />
              )}
            </Boxed>
          </Tab>
          {bookList.map((item) => {
            return (
              <Tab
                eventKey={item.id}
                title={
                  <Text fontWeight="bold">
                    {truncateText(item?.data?.name, 15)}{" "}
                    <Icon
                      onClick={() => removeItem(item)}
                      className="icon icon-x"
                    />
                  </Text>
                }
              >
                <Boxed pad="20px">
                  {item?.data?.file && (
                    <StyledReader>
                      <PDFViewer
                        document={{
                          base64: item?.data?.file,
                        }}
                      />
                    </StyledReader>
                  )}
                </Boxed>
              </Tab>
            );
          })}
        </Tabs>
      </StyledTabs>
    </Boxed>
  );
};
