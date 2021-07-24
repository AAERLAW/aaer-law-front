import React from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import HOME_1 from "../../assets/img/home-1.png";
import HOME_2 from "../../assets/img/home-2.png";
import HOME_3 from "../../assets/img/home-3.png";
import HOME_4 from "../../assets/img/home-4.png";

import { Theme } from "../../utils/theme";

import TopNav from "../Common/TopNav/index";
import Footer from "../Common/Footer/index";

export const Home = (props) => {
  const { redirect } = props;
  return (
    <>
      <TopNav />
      <Boxed
        width="100%"
        pad="1rem 0"
        height="100%"
        display="flex"
        position="relative"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Boxed padding="60px 5px" align="center">
            <Text margin="45px auto" fontWeight="bold" fontSize="36px">
              Join the League of <br />
              Smart Lawyers through AAER
            </Text>
            <Text
              margin="20px auto"
              color={Theme.SecondaryTextColor}
              fontSize="18px"
            >
              AAER Law is an all-in-one legal management software for your law
              practice, providing all resources you need to increase efficiency
              and scale your legal research.
            </Text>
            <Button margin="15px 0" onClick={() => redirect("/registration")}>
              Register
            </Button>
          </Boxed>
          <Boxed align="center" pad="20px">
            <img src={HOME_1} alt="home-1" width="100%" />
          </Boxed>
          <Boxed pad="20px">
            <Text align="center" fontSize="24px" fontWeight="bold">
              TRUSTED BY NIGERIAN LAW AGENCIES
            </Text>
          </Boxed>

          <Grid
            desktop="repeat(2, 1fr)"
            tablet="repeat(2, 1fr)"
            mobile="repeat(1, 1fr)"
          >
            <Boxed pad="20px 10px" minHeight="300px">
              <img src={HOME_2} width="100%" alt="video-section" />
            </Boxed>
            <Boxed pad="20px 10px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="24px" fontWeight="bold">
                  All the features of AAER in one Dashboard
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  Get access to latest judgements, rules, regulations and
                  unlimited court forms templates using just your browser.
                </Text>
              </Boxed>
            </Boxed>

            <Boxed pad="20px 10px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="24px" fontWeight="bold">
                  Your clients trust you because AAER Law gives you assurance.
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  Whether its law reports, purchasing textbooks, creating forms
                  and agreements or staying updated with your legal practice,
                  Primsol has you covered.
                </Text>
              </Boxed>
            </Boxed>
            <Boxed pad="20px 10px" minHeight="300px">
              <img src={HOME_2} width="100%" alt="home-2" />
            </Boxed>

            <Boxed pad="20px 10px" minHeight="300px">
              <img src={HOME_3} width="100%" alt="home-3" />
            </Boxed>
            <Boxed pad="20px 10px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="24px" fontWeight="bold">
                  Best Price rate for unlimited access.
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  AAER puts the knowlegde of law right in your pockets.
                </Text>
              </Boxed>
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
      <Boxed
        width="100%"
        pad="1rem 0"
        height="100%"
        display="flex"
        position="relative"
        bColor={Theme.PrimaryColor}
      >
        <Boxed
          maxWidth="1080px"
          width="100%"
          margin="0 auto"
          align="center"
          pad="3rem 10px"
        >
          <Text color="#FFFFFF" fontSize="24px" fontWeight="bold">
            Digital Lawyering Access <br />
            Made Easy!
          </Text>
          <Text color="#FFFFFF">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Boxed>
      </Boxed>
      <Boxed
        width="100%"
        pad="1rem 0"
        height="100%"
        display="flex"
        position="relative"
      >
        <Boxed
          maxWidth="1080px"
          width="100%"
          margin="0 auto"
          align="center"
          pad="1rem 10px"
        >
          <Grid
            desktop="repeat(2, 1fr)"
            tablet="repeat(2, 1fr)"
            mobile="repeat(1, 1fr)"
            pad="1rem 10px"
          >
            <Boxed pad="20px 10px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="24px" fontWeight="bold">
                  All the features of AAER in one Dashboard
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dictum ipsum gravida augue sed id. bibendum a. In egestas
                  facilisis consectetur a ut pellentesque blandit nisl odio. Sem
                  odio nulla morbi sapien egestas volutpat.
                </Text>
              </Boxed>
            </Boxed>
            <Boxed pad="20px 10px" height="300px">
              <img src={HOME_4} width="100%" alt="home-2" />
            </Boxed>
          </Grid>

          <Boxed padding="45px 5px" align="center">
            <Text margin="40px auto" fontWeight="bold" fontSize="24px">
              Get Started with AAER today !
            </Text>
            <Text
              margin="30px auto"
              color={Theme.SecondaryTextColor}
              fontSize="16px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Text>
            <Button margin="25px 0">Get Started</Button>
          </Boxed>
        </Boxed>
      </Boxed>
      <Footer />
    </>
  );
};
