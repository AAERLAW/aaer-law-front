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

import TopNav from "../Common/TopNav/index";
import Footer from "../Common/Footer/index";

import { SubscribeList } from "../style";

export const Pricing = (props) => {
  // dispatch props recieved
  const { redirect } = props;

  let viewMode = calcViewMode();

  return (
    <>
      <TopNav />
      <Boxed
        align="center"
        backgound={SUB_BG}
        style={{
          // backgroundImage: `url(${SUB_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        minHeight="40vh"
      >
        <Text padding="80px 5px 50px 5px" fontSize="30px" fontWeight="normal">
          Choose your subscription plan
        </Text>
      </Boxed>
      <Boxed
        width="100%"
        pad="20px 0 60px 0"
        height="100%"
        display="flex"
        position="relative"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Boxed margin="-20vh 0 0 0">
            <Grid desktop="33% 33% 33%" tablet="50% 50%" mobile="100%">

            {viewMode !== "mobile" && (
            <Boxed margin="0 0 0.5rem 0" display="flex" width="100%">
                <Boxed
                  pad="40px 20px 0px 40px"
                  margin="10px 20px"
                  bColor="#eb4149"
                  background={`linear-gradient(to bottom right, ${Theme.PrimaryColor}, ${Theme.PrimaryDark}80)`}
                  maxWidth="350px"
                  boxShadow="0 6px 20px rgba(56, 125, 255, 0.2)"
                  borderRadius="25px"
                >
                  <Text
                    padding="40px 40px 10px 0px"
                    fontSize="28px"
                    fontWeight="bold"
                    color={Theme.TertiaryDark}
                  >
                    A subscription Plan for Everyone
                  </Text>
                  <Text color={Theme.TertiaryDark}>
                    Get Started
                  </Text>
                </Boxed>
              </Boxed>)}
            
              <Boxed margin="0 0 0rem 0" display="flex" width="100%">
                <Boxed
                  pad="40px 40px 0px 40px"
                  margin="10px 20px"
                  bColor="#FFFFFF"
                  maxWidth="350px"
                  boxShadow="0 6px 20px rgba(56, 125, 255, 0.2)"
                  borderRadius="25px"
                >
                  {/* <img src={STUDENTS} height="50px" alt="read-online" /> */}
                  <Text
                    padding="40px 0 10px 0"
                    fontSize="28px"
                    fontWeight="bold"
                  >
                    {SubcriptionPlans.basic.plan}
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                  The fundamental plan to get you started and increase your productivity as a legal Practitioner.
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

                  <Text margin="auto 0 0 0" padding="10px 0" fontWeight="bold">
                    <Icon className="icon-circle" /> Pay{" "}
                    {/* {SubcriptionPlans.basic.mothly.amount_label}{" "}
                    {SubcriptionPlans.basic.mothly.label} */}
                  </Text>

                  <Text margin="auto 0 0 0" padding="10px 0" fontWeight="bold">
                    <Icon className="icon-circle" /> Pay{" "}
                    {/* {SubcriptionPlans.basic.annually.amount_label}{" "}
                    {SubcriptionPlans.basic.annually.label} */}
                  </Text>
                  {/* <Text color={Theme.SecondaryTextColor}>
                    Pay Monthly or Anually
                  </Text> */}

                  <Button
                    margin="20px 0 0 0"
                    block
                    onClick={() => redirect("/login")}
                  >
                    Select
                  </Button>
                </Boxed>
              </Boxed>
              <Boxed margin="0 0 0rem 0" display="flex" width="100%">
                <Boxed
                  pad="40px 40px 40px 40px"
                  margin="10px 20px"
                  bColor="#FFFFFF"
                  maxWidth="350px"
                  boxShadow="0 6px 20px rgba(56, 125, 255, 0.2)"
                  borderRadius="25px"
                >
                  {/* <img
                    src={LEGAL_PRACTITIONER}
                    height="50px"
                    alt="read-online"
                  /> */}
                  <Text
                    padding="40px 0 10px 0"
                    fontSize="28px"
                    fontWeight="bold"
                  >
                    {SubcriptionPlans.professional.plan}
                  </Text>
                  <Text color={Theme.SecondaryTextColor}>
                  Get Access to Basic feature and all the new / latest features coming on AAER.
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

                  <Text margin="auto 0 0 0" padding="10px 0" fontWeight="bold">
                    <Icon className="icon-circle" /> Pay{" "}
                    {/* {SubcriptionPlans.professional.mothly.amount_label}{" "}
                    {SubcriptionPlans.professional.mothly.label} */}
                  </Text>

                  <Text margin="auto 0 0 0" padding="10px 0" fontWeight="bold">
                    <Icon className="icon-circle" /> Pay{" "}
                    {/* {SubcriptionPlans.professional.annually.amount_label}{" "}
                    {SubcriptionPlans.professional.annually.label} */}
                  </Text>
                  {/* <Text color={Theme.SecondaryTextColor}>
                    Pay Monthly or Anually
                  </Text> */}

                  <Button
                    margin="20px 0 0 0"
                    block
                    onClick={() => redirect("/login")}
                  >
                    Select
                  </Button>
                </Boxed>
              </Boxed>
            </Grid>
          </Boxed>
        </Boxed>
      </Boxed>
      <Footer />
    </>
  );
};
