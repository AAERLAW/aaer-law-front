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
            Connect with AAER, <br /> your all time legal companion. 
              
            </Text>
            <Text
              margin="20px auto"
              color={Theme.SecondaryTextColor}
              fontSize="18px"
            >
              AAER is an exceptional tool for your legal research work and courtroom practice. 
            </Text>
            <Button margin="15px 0" onClick={() => redirect("/registration")}>
              Register
            </Button>
          </Boxed>
          <Boxed align="center" pad="20px">
            <img src={HOME_1} alt="home-1" width="100%" />
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
                All your legal resource in one space.
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                Connect to our recent reported judgement, precedents and other reference tool
                </Text>
              </Boxed>
            </Boxed>

            <Boxed pad="20px 10px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="24px" fontWeight="bold">
                Why AAER?
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                "All your legal 'resources' in one space." "Legal research made easy with 'a' clear and unambiguous subject matter index... 'Laws of the Federation', case commentaries, forms and precedents, textbooks 'and other valuable resources.'
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
                A subscription plan for everyone.
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  AAER puts the knowlegde of law right in your pockets.
                </Text>
              </Boxed>
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
      {/* <Boxed
        width="100%"
        pad="1rem 0"
        height="100%"
        display="flex"
        position="relative"
        bColor={Theme.PrimaryColor}
      >
        
      </Boxed> */}
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
          
          <Boxed padding="45px 5px" align="center">
            <Text margin="40px auto" fontWeight="bold" fontSize="24px">
            Are you ready to take your legal research game to the next level?
            </Text>
            <Button margin="25px 0" onClick={() => redirect("/registration")}>Get Started</Button>
          </Boxed>
        </Boxed>
      </Boxed>
      <Footer />
    </>
  );
};

  );
};
