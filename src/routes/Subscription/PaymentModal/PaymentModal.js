import React, { useCallback, useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";

import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { Alert } from "../../../components/Alert.components";
import { SwitchComp } from "../../../components/Switch.components";
import { Checkbox } from "../../../components/Input.components";
import { ModalComponent } from "../../../components/Modal.components";

import {
  PAYSTACK_KEY,
  PAYSTACK_M,
  PAYSTACK_Y,
  PAYSTACK_M_ONEOFF,
  PAYSTACK_Y_ONEOFF,
} from "../../../utils/config";
import { calcViewMode, hash } from "../../../utils/utils";
import { Theme } from "../../../utils/theme";
import { PageTitle, Icon } from "../../../components/style";

export const PaymentModal = (props) => {
  const email = "bankiakid@gmail.com";
  // State props
  const { openPaymentModal, subscriptionPlan, isLoading } = props;

  // Dispatch props
  const { verifyPayment, closeModal, redirect } = props;

  const redirectCallback = useCallback((value) => redirect(value), [redirect]);

  const [terms, setTerms] = useState(false);
  const [autorenew, setAutorenew] = useState(false);

  let viewMode = calcViewMode();

  const onSubmit = () => {};

  const getReference = (email) => {
    let today = new Date();
    let hash_value = `${email ? email : ""}${today.toString()}`;
    let answer = hash(hash_value);
    return answer;
  };

  const callback = (response) => {
    // card charged successfully, get reference here
    switch (response.status) {
      case "success":
        let data = { reference: response.reference, subscribe_plan: plan };
        let close = closeModal;
        verifyPayment(data, close);
        break;
      default:
        // redirect("/");
        console.log(response);
        Alert.error("Please authenticate your account detail.");
        break;
    }
  };

  let plan = `${subscriptionPlan ? subscriptionPlan.plan : ""}${
    autorenew ? "" : "_ONEOFF"
  }`;

  const getPaystackPlan = (plan) => {
    switch (plan) {
      case "MONTHLY":
        return PAYSTACK_M;
      case "MONTHLY_ONEOFF":
        return PAYSTACK_M_ONEOFF;
      case "YEARLY":
        return PAYSTACK_Y;
      case "YEARLY_ONEOFF":
        return PAYSTACK_Y_ONEOFF;
      default:
        return PAYSTACK_M;
    }
  };

  let actualPlan = getPaystackPlan(plan);

  let errors;
  return (
    <>
      <ModalComponent
        show={openPaymentModal}
        onHide={closeModal}
        title={<PageTitle>Subcription </PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <PaystackButton
              text={
                <Button
                  disabled={!terms || isLoading}
                  loading={isLoading}
                  block
                  small
                >
                  CONFIRM
                </Button>
              }
              class="payButton"
              callback={callback}
              plan={actualPlan}
              close={redirectCallback}
              disabled={!terms}
              embed={false}
              reference={getReference(email)}
              email={email}
              amount={subscriptionPlan ? subscriptionPlan.amount : 0}
              publicKey={PAYSTACK_KEY}
              tag="a"
            ></PaystackButton>
          </>
        }
      >
        <Boxed pad="10px 0">
          <Text>
            You are subscribing to the{" "}
            <b>
              {`${subscriptionPlan ? subscriptionPlan.label : " "}`}{" "}
              {`${subscriptionPlan ? subscriptionPlan.plan : " "}`}
            </b>{" "}
            plan. <br />
            Billing will take place{" "}
            <b>{`${subscriptionPlan ? subscriptionPlan.label : " "}`}</b> if you
            choose to autorenew.
          </Text>
          <Text fontWeight="normal">
            Your account will be charged{" "}
            <b>{`${
              subscriptionPlan ? subscriptionPlan.amount_label : "-- --"
            }`}</b>
            , plus applicable taxes for 1 active user[s].
            <br /> We will automatically renew your plan{" "}
            <b>{`${subscriptionPlan ? subscriptionPlan.label : "-- --"}`}</b>,
            should you choose to autorenew. You can cancel anytime in the
            "Settings" panel.
          </Text>
        </Boxed>
        <Boxed pad="0.5rem 1rem" display="flex">
          <SwitchComp
            checked={autorenew}
            onChange={() => setAutorenew((prev) => !prev)}
          />
          <Text
            fontSize={Theme.SecondaryFontSize}
            fontWeight="normal"
            color={Theme.PrimaryTextColor}
            margin="auto 0 auto 10px"
          >
            Autorenew Subcription
          </Text>
        </Boxed>
        <Boxed pad="0.5rem 1rem">
          <Checkbox
            checked={terms}
            onClick={() => setTerms((prev) => !prev)}
            name="terms"
            fontSize={Theme.SecondaryFontSize}
          >
            <Text
              color={Theme.PrimaryTextColor}
              fontSize={Theme.SecondaryFontSize}
            >
              I agree to the Terms of Service and Fair Billing Policy
            </Text>
          </Checkbox>
        </Boxed>
      </ModalComponent>
    </>
  );
};
