import React from "react";
import { Input } from "../../../components/Input.components";
import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { Alert } from "../../../components/Alert.components";
import { ModalComponent } from "../../../components/Modal.components";

import { calcViewMode, getBase64 } from "../../../utils/utils";
import { Theme } from "../../../utils/theme";
import { PageTitle, Icon } from "../../../components/style";

export const CreateModal = (props) => {
  // State props
  const { createCourtItemModal, isLoading, court_form_name, court_form_id } =
    props;

  // Dispatch props
  const { form, createCourtFormsItem, closeModal } = props;
  const { getFieldProps, getFieldError, validateFields } = form;
  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          name: value.name.trim(),
          year: value.year,
          court_form_id: court_form_id,
        };
        createCourtFormsItem(data);
      }
    });
  };
  let errors;

  return (
    <>
      <ModalComponent
        show={createCourtItemModal}
        onHide={closeModal}
        title={<PageTitle>Create Court Form Item</PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <Button
              progress={isLoading}
              disabled={isLoading}
              onClick={onSubmit}
            >
              Create Item
            </Button>
          </>
        }
      >
        <Text padding="0 0 10px 0">
          Court Form : <b>{court_form_name}</b>
        </Text>
        <Boxed pad="10px 0">
          <Input
            type="text"
            label="Item Name"
            placeholder="Enter Item name..."
            error={
              (errors = getFieldError("name")) ? "Item name is required" : null
            }
            {...getFieldProps("name", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0">
          <Input
            type="number"
            label="Year"
            placeholder="Enter Year..."
            error={(errors = getFieldError("year")) ? "Year is required" : null}
            {...getFieldProps("year", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
      </ModalComponent>
    </>
  );
};
