import React, { useState, useEffect } from "react";
import moment from "moment";
import Upload from "rc-upload";

import {
  Input,
  AsyncSelect,
  Textarea,
} from "../../../../components/Input.components";
import { Grid } from "../../../../components/Grid.components";
import { Boxed } from "../../../../components/Boxed.components";
import { Text } from "../../../../components/Text.components";
import { Button } from "../../../../components/Button.components";
import { Alert } from "../../../../components/Alert.components";
import { ModalComponent } from "../../../../components/Modal.components";
import { Icon } from "../../../../components/style";

import { calcViewMode, getBase64 } from "../../../../utils/utils";
import { Theme } from "../../../../utils/theme";
import { PageTitle } from "../../../../components/style";

export const CreateJudgement = (props) => {
  // State props
  const { createJudgementModal, isLoading, courts, isCourtsLoading } = props;

  // Dispatch props
  const { form, createJudgement, closeModal, getAllCourts } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  const [file, setFile] = useState({});

  useEffect(() => {
    let data = {
      page: 1,
      size: 100,
    };
    getAllCourts(data);
  }, []);

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
    });
  };

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        if (file.base64) {
          const data = {
            case_title: value.case_title.trim(),
            suit_number: value.suit_number.trim(),
            citation: value.citation.trim(),
            lead_judgement_by: value.lead_judgement_by.trim(),
            summary: value.summary.trim(),
            judgement_date: moment(value.judgement_date).format("DD-MM-YYYY"),
            court_id: value.court_id.value,
            file: file.base64,
            extension: "pdf",
          };
          createJudgement(data);
        } else {
          Alert.info("Case file is required");
        }
      }
    });
  };

  const modiCourts =
    courts && courts.map((item) => ({ value: item.id, label: item.name }));
  let errors;

  return (
    <>
      <ModalComponent
        show={createJudgementModal}
        onHide={closeModal}
        title={<PageTitle>Create Report</PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <Button diabled={isLoading} progess={isLoading} onClick={onSubmit}>
              Create Report
            </Button>
          </>
        }
      >
        <Boxed pad="10px 0 ">
          <Input
            type="text"
            label="Case Title"
            placeholder="Enter case title..."
            error={
              (errors = getFieldError("case_title"))
                ? "Case title is required"
                : null
            }
            {...getFieldProps("case_title", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0 ">
          <Input
            type="text"
            label="Lead Judgement by"
            placeholder="Enter lead judgement by..."
            error={
              (errors = getFieldError("lead_judgement_by"))
                ? "Lead Judgement by is required"
                : null
            }
            {...getFieldProps("lead_judgement_by", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Grid
          desktop="repeat(2, 1fr)"
          tablet="repeat(2, 1fr)"
          mobile="repeat(2, 1fr)"
        >
          <Boxed pad="10px 0 ">
            <Input
              type="text"
              label="Suit Number"
              placeholder="Enter suit number..."
              error={
                (errors = getFieldError("suit_number"))
                  ? "Suit Number is required"
                  : null
              }
              {...getFieldProps("suit_number", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            <Input
              type="text"
              label="Citation"
              placeholder="Enter citation..."
              error={
                (errors = getFieldError("citation"))
                  ? "Citation is required"
                  : null
              }
              {...getFieldProps("citation", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            <Input
              type="date"
              label="Judgement Date"
              placeholder="Enter judgement date..."
              error={
                (errors = getFieldError("judgement_date"))
                  ? "Judgement Date is required"
                  : null
              }
              {...getFieldProps("judgement_date", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            <AsyncSelect
              label="Court"
              placeholder="Enter Court..."
              options={modiCourts}
              isloading={isCourtsLoading}
              error={
                (errors = getFieldError("court_id"))
                  ? "Court is required"
                  : null
              }
              {...getFieldProps("court_id", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
        </Grid>
        <Boxed pad="10px 0">
          <Textarea
            label="Summary"
            placeholder="Enter Summary..."
            rows={5}
            height="100px"
            error={
              (errors = getFieldError("summary")) ? "Summary is required" : null
            }
            {...getFieldProps("summary", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0">
          <Text fontWeight="bold" fontSize={Theme.SecondaryFontSize}>
            Case File
          </Text>
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
        </Boxed>
      </ModalComponent>
    </>
  );
};
