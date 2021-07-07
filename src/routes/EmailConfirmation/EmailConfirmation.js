import React, { useEffect } from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Input } from "../../components/Input.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Loader } from "../../components/Loader.components";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import { Theme } from "../../utils/theme";

export const EmailConfirmation = (props) => {
  const {
    emailVerified,
    verificationInfo,
    token,
    isLoading,
    redirect,
    emailConfirmation,
    form,
    completeRegistration,
  } = props;
  const { getFieldProps, getFieldError, validateFields, getFieldValue } = form;
  let viewMode = calcViewMode();

  useEffect(() => {
    console.log("token", token);
    emailConfirmation({ token });
  }, []);

  const checkConfirmPassword = (value1, rule, value, callback, source) => {
    if (value !== value1) {
      callback("Passwords must match");
    } else {
      callback();
    }
  };
  const checkPassword = (value1, rule, value, callback, source) => {
    if (value) {
      let length = value.length;
      let checkLength = length > 7;

      if (checkLength) {
        let numberTest = /\d/.test(value);
        let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let specialCharaterTest = value.match(format);
        if (numberTest || specialCharaterTest) {
          callback();
        } else {
          callback("Password must contain either a digit or special charater.");
        }
      } else {
        callback("Password must be atleast 8 characters");
      }
    } else {
      callback();
    }
  };

  const onEnter = (e) => {
    e.stopPropagation();
    e.key === "Enter" && onCompleteRegistration();
  };

  const onCompleteRegistration = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          otp: verificationInfo?.otp,
          password: value.password,
          confirm_password: value.confirm_password,
        };
        completeRegistration(data);
      }
    });
  };
  let errors;

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
                    {emailVerified || true ? (
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
                        <Boxed pad="10px">
                          <Text> Please set a new password </Text>
                        </Boxed>
                        <Boxed margin="20px 0">
                          <Input
                            type="password"
                            placeholder="New Password..."
                            onKeyPress={onEnter}
                            error={
                              getFieldError("password")
                                ? getFieldError("password")
                                : null
                            }
                            {...getFieldProps("password", {
                              rules: [
                                { required: true },
                                {
                                  validator: checkPassword.bind(
                                    this,
                                    getFieldValue("password")
                                  ),
                                },
                              ],
                              initialValue: "",
                            })}
                          />
                        </Boxed>
                        <Boxed margin="20px 0">
                          <Input
                            type="password"
                            placeholder="Confirm Password..."
                            onKeyPress={onEnter}
                            error={
                              getFieldError("confirm_password")
                                ? "Confirm password must match password"
                                : null
                            }
                            {...getFieldProps("confirm_password", {
                              rules: [
                                { required: true },
                                {
                                  validator: checkConfirmPassword.bind(
                                    this,
                                    getFieldValue("password")
                                  ),
                                },
                              ],
                              initialValue: "",
                            })}
                          />
                        </Boxed>

                        <Boxed align="center" className="mx-auto">
                          <Button
                            block
                            onClick={() => onCompleteRegistration()}
                          >
                            Save Password
                          </Button>
                        </Boxed>
                        <Text margin="1rem 0">Or</Text>
                        <Text
                          margin="1rem 0"
                          color={Theme.PrimaryBlue}
                          fontWeight="bold"
                          cursor="pointer"
                          onClick={() => redirect("/")}
                        >
                          Login
                        </Text>
                      </>
                    ) : (
                      <Boxed className="py-4" align="center">
                        <Text>Opps an error occured</Text>
                      </Boxed>
                    )}
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
