import React, { useEffect, useState } from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Icon } from "../../components/style";

import { calcViewMode, formatCurrency } from "../../utils/utils";
import { SubcriptionPlans } from "../../utils/constant";
import { Theme } from "../../utils/theme";

import SUB_BG from "../../assets/img/sub-bg.png";
import STUDENTS from "../../assets/img/students.png";
import LEGAL_PRACTITIONER from "../../assets/img/legal-practitioner.png";

import { SubscribeList } from "../style";

import PaymentModal from "./PaymentModal/index";

export const Subscription = (props) => {
  // state props received
  const { openPaymentModal, subscriptionDetail, subscription_plans } = props;

  // dispatch props recieved
  const { redirect, openModal, getAllSubscriptionPlans, initiatePayment } =
    props;

  const [planType, setPlanType] = useState("monthly");

  useEffect(() => {
    console.log(subscriptionDetail);
    getAllSubscriptionPlans(subscriptionDetail);
  }, []);

  let viewMode = calcViewMode();
  let errors;

  console.log(subscription_plans);

  const data = [
    {
      amount: 2500,
      description:
        "This subscription package is suitable for students and practitioners.",
      discount: 0,
      id: "PLN_z3o30mdshhiahdq",
      title: "BASIC",
    },
    {
      amount: 4000,
      description: "The right package is for researchers ",
      discount: 0,
      id: "PLN_1nscvuqx394to86",
      title: "PROFESSIONAL",
    },
    {
      amount: 40000,
      description: "Annual professional subscription.",
      discount: 0,
      id: "PLN_3lupdof7km8qih5",
      title: "PROFESSIONAL_YEAR",
    },
    {
      amount: 25000,
      description: "Annual basic subscription.",
      discount: 0,
      id: "PLN_9hwm54svjh4ud5f",
      title: "BASIC_YEAR",
    },
  ];

  let monthly_plans = [];
  let yearly_plans = [];
  data.forEach((item) => {
    if (item.title === "BASIC" || item.title === "PROFESSIONAL") {
      monthly_plans.push({ ...item, type: "monthly" });
    }
    if (item.title === "BASIC_YEAR" || item.title === "PROFESSIONAL_YEAR") {
      yearly_plans.push({ ...item, type: "yearly" });
    }
  });
  let plans = [];
  plans = planType === "monthly" ? monthly_plans : yearly_plans;

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
        <Boxed display="flex">
          <Boxed
            bColor={Theme.TertiaryDark}
            pad="5px"
            borderRadius={Theme.PrimaryRadius}
            border={`1px dashed ${Theme.PrimaryColor}`}
            margin="10px auto"
          >
            <Button
              pale={planType !== "monthly"}
              onClick={() => setPlanType("monthly")}
            >
              Monthly
            </Button>
            <Button
              pale={planType !== "annually"}
              onClick={() => setPlanType("annually")}
            >
              Annually
            </Button>
          </Boxed>
        </Boxed>
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
              {plans.length > 0 &&
                plans.map((item, index) => {
                  const isBasic =
                    item.title === "BASIC" || item.title === "BASIC_YEAR";
                  return (
                    <Boxed
                      key={index}
                      margin="0 0 0.5rem 0"
                      display="flex"
                      width="100%"
                    >
                      <Boxed
                        pad="40px 20px"
                        margin="10px auto"
                        bColor="#FFFFFF"
                        maxWidth="350px"
                        boxShadow="-3px 3px 6px 4px #00000020"
                        borderRadius="25px"
                      >
                        <img
                          src={isBasic ? STUDENTS : LEGAL_PRACTITIONER}
                          height="50px"
                          alt="read-online"
                        />
                        <Text
                          padding="40px 0 10px 0"
                          fontSize="28px"
                          fontWeight="bold"
                        >
                          {item.title}
                        </Text>
                        {isBasic ? (
                          <Text color={Theme.SecondaryTextColor}>
                            The fundamental plan to get you started and increase
                            your productivity as a legal Practitioner.
                          </Text>
                        ) : (
                          <Text color={Theme.SecondaryTextColor}>
                            Get Access to Basic feature and all the new features
                            coming on AAER.
                          </Text>
                        )}
                        <SubscribeList>
                          <li>
                            <Icon className="icon-check" />
                            Law Reports
                          </li>
                          <li>
                            {" "}
                            <Icon className="icon-check" /> Laws of the
                            Federation
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
                          {!isBasic && (
                            <>
                              <li>
                                {" "}
                                <Icon className="icon-check" /> Precedents
                              </li>
                              <li>
                                {" "}
                                <Icon className="icon-check" /> Journal Articles
                              </li>
                            </>
                          )}
                        </SubscribeList>

                        <Text
                          margin="auto 0 0 0"
                          padding="20px 0 5px 0"
                          fontWeight="bold"
                        >
                          From ₦ {formatCurrency(item.amount || 0)}
                        </Text>
                        <Text color={Theme.SecondaryTextColor}>
                          Pay {planType}
                        </Text>

                        <Button
                          margin="20px 0 0 0"
                          block
                          onClick={() => initiatePayment(item)}
                        >
                          Select
                        </Button>
                      </Boxed>
                    </Boxed>
                  );
                })}

              {/* <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
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
                    {SubcriptionPlans?.basic?.plan}
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    The fundamental plan to get you started and increase your
                    productivity as a legal Practitioner.
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
                  </SubscribeList>

                  <Text
                    margin="auto 0 0 0"
                    padding="20px 0 5px 0"
                    fontWeight="bold"
                  >
                    From {SubcriptionPlans?.basic[planType]?.amount_label}
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Pay {SubcriptionPlans?.basic[planType]?.label}
                  </Text>

                  <Button
                    margin="20px 0 0 0"
                    block
                    onClick={() => openModal(SubcriptionPlans.basic[planType])}
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
                    {SubcriptionPlans?.professional?.plan}
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Get Access to Basic feature and all the new features coming
                    on AAER.
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
                    From{" "}
                    {SubcriptionPlans?.professional[planType]?.amount_label}
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                    Pay {SubcriptionPlans?.basic[planType]?.label}
                  </Text>

                  <Button
                    margin="20px 0 0 0"
                    block
                    onClick={() =>
                      openModal(SubcriptionPlans.professional[planType])
                    }
                  >
                    Select
                  </Button>
                </Boxed>
              </Boxed> */}
            </Grid>
          </Boxed>
        </Boxed>
        {openPaymentModal && <PaymentModal />}
      </Boxed>
    </>
  );
};
