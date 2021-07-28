import React, { useEffect } from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Icon } from "../../components/style";

import { calcViewMode } from "../../utils/utils";
import { SubcriptionPlans } from "../../utils/constant";
import { Theme } from "../../utils/theme";

import SUB_BG from "../../assets/img/sub-bg.png";
import STUDENTS from "../../assets/img/students.png";
import LEGAL_PRACTITIONER from "../../assets/img/legal-practitioner.png";

import { SubscribeList } from "../style";

import PaymentModal from "./PaymentModal/index";

export const Subscription = (props) => {
  // state props received
  const { openPaymentModal } = props;

  // dispatch props recieved
  const { redirect, openModal, getAllSubscriptionPlans } = props;

  useEffect(() => {
    getAllSubscriptionPlans();
  }, []);
  let viewMode = calcViewMode();
  let errors;

  return (
    <>
      <Boxed
        align="center"
        backgound={SUB_BG}
        style={{
          backgroundImage: `url(${SUB_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        minHeight="40vh"
      >
        <Text padding="40px 5px 5px 5px" fontSize="20px" fontWeight="bold">
          Choose your subscription plan
        </Text>
        <Text color={Theme.SecondaryTextColor}>Select your plan</Text>
      </Boxed>
      <Boxed
        width="100%"
        pad="0"
        height="100%"
        display="flex"
        position="relative"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Boxed margin="-20vh 0 0 0">
            <Grid desktop="50% 50%" tablet="40% 60%" mobile="100%">
              <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
                <Boxed
                  pad="40px 20px"
                  margin="10px auto"
                  bColor="#FFFFFF"
                  maxWidth="350px"
                  boxShadow="-3px 3px 6px 4px #00000020"
                  borderRadius="25px"
                >
                  <img src={STUDENTS} height="50px" alt="read-online" />
                  <Text
                    padding="40px 0 10px 0"
                    fontSize="28px"
                    fontWeight="bold"
                  >
                    Basic
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                    blandit non id varius.
                  </Text>
                  <SubscribeList>
                    <li>
                      <Icon className="icon-check" />
                      Law Reports
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Laws of the Federation
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Regulations of MDA
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Rules of Court
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Textbooks
                    </li>
                    {/* <li>
                      {" "}
                      <Icon className="icon-check" /> Precedents
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Journal Articles
                    </li> */}
                  </SubscribeList>

                  <Text
                    margin="auto 0 0 0"
                    padding="20px 0 5px 0"
                    fontWeight="bold"
                  >
                    From N 1,500
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Pay Monthly or Anually
                  </Text>

                  <Button
                    margin="20px 0 0 0"
                    block
                    onClick={() => openModal(SubcriptionPlans.basic)}
                  >
                    Select
                  </Button>
                </Boxed>
              </Boxed>
              <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
                <Boxed
                  pad="40px 20px"
                  margin="10px auto"
                  bColor="#FFFFFF"
                  maxWidth="350px"
                  boxShadow="-3px 3px 6px 4px #00000020"
                  borderRadius="25px"
                >
                  <img
                    src={LEGAL_PRACTITIONER}
                    height="50px"
                    alt="read-online"
                  />
                  <Text
                    padding="40px 0 10px 0"
                    fontSize="28px"
                    fontWeight="bold"
                  >
                    Professional
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                    blandit non id varius.
                  </Text>
                  <SubscribeList>
                    <li>
                      <Icon className="icon-check" />
                      Law Reports
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Laws of the Federation
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Regulations of MDA
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Rules of Court
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Textbooks
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Precedents
                    </li>
                    <li>
                      {" "}
                      <Icon className="icon-check" /> Journal Articles
                    </li>
                  </SubscribeList>

                  <Text
                    margin="auto 0 0 0"
                    padding="20px 0 5px 0"
                    fontWeight="bold"
                  >
                    From N 4,000
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Pay Monthly or Anually
                  </Text>

                  <Button
                    margin="20px 0 0 0"
                    block
                    onClick={() => openModal(SubcriptionPlans.professional)}
                  >
                    Select
                  </Button>
                </Boxed>
              </Boxed>
            </Grid>
          </Boxed>
        </Boxed>
        {openPaymentModal && <PaymentModal />}
      </Boxed>
    </>
  );
};
