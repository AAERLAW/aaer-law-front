import React, { useEffect } from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Loader } from "../../components/Loader.components";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import { Theme } from "../../utils/theme";

export const EmailConfirmation = (props) => {
  const { token, isLoading, redirect, emailConfirmation } = props;
  let viewMode = calcViewMode();

  useEffect(() => {
    console.log("token", token);
    emailConfirmation({ token });
  }, []);

  return (
    <>
      <Boxed
        width="100%"
        pad="1rem 0"
        height="100%"
        display="flex"
        position="relative"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Grid desktop="50% 50%" tablet="40% 60%" mobile="100%">
            <Boxed display="flex" width="100%" height="100%">
              <img
                src={LOGO}
                height="64px"
                alt="app_logo"
                style={{ margin: "auto" }}
              />
            </Boxed>
            <Boxed display="flex" width="100%" minHeight="100vh">
              <Boxed
                margin="auto"
                align="center"
                minWidth="300px"
                maxWidth="450px"
              >
                {isLoading ? (
                  <>
                    <Boxed
                      align="center"
                      pad="2rem 0 0.5rem 0"
                      classname="mx-auto"
                    >
                      <Loader />
                    </Boxed>
                    <Boxed align="center" pad="0.35rem 0" classname="mx-auto">
                      <Text color={Theme.PrimaryTextColor} fontSize="16px">
                        Verifying email ...
                      </Text>
                    </Boxed>
                  </>
                ) : (
                  <>
                    <Boxed pad="0.5rem 0" align="center">
                      <Text fontSize="25px" color={Theme.PrimaryTextColor}>
                        Congratulations!
                      </Text>
                    </Boxed>
                    <Boxed className="py-4" align="center">
                      <Text>
                        Your email address has been successfully verified.{" "}
                      </Text>
                    </Boxed>
                    <Boxed align="center" className="mx-auto">
                      <Button block onClick={() => redirect("/")}>
                        PROCEED TO LOGIN
                      </Button>
                    </Boxed>
                  </>
                )}
              </Boxed>
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
    </>
  );
};
