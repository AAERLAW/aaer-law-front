import React from "react";

import { Input } from "../../../components/Input.components";
import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { ModalComponent } from "../../../components/Modal.components";

import { calcViewMode } from "../../../utils/utils";
import { Theme } from "../../../utils/theme";
import { PageTitle } from "../../../components/style";

export const CreateMDA = (props) => {
  // State props
  const { createMdaModal, isLoading } = props;

  // Dispatch props
  const { form, createMDA, closeModal } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          name: value.name.trim(),
        };
        createMDA(data);
      }
    });
  };
  let errors;

  return (
    <>
      <ModalComponent
        show={createMdaModal}
        onHide={closeModal}
        title={<PageTitle>Create MDA</PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <Button progess={isLoading} onClick={onSubmit}>
              Create MDA
            </Button>
          </>
        }
      >
        <Boxed pad="0 0 20px 0">
          <Input
            type="text"
            label="MDA Name"
            placeholder="Enter MDA name..."
            error={
              (errors = getFieldError("name")) ? "MDA's name is required" : null
            }
            {...getFieldProps("name", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
      </ModalComponent>
    </>
  );
};
