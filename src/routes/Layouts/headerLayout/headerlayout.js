import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import { Label } from "../../../components/Input.components";
import { Text } from "../../../components/Text.components";
import { Boxed } from "../../../components/Boxed.components";
import { Avatar } from "../../../components/Avatar.components";
import { Icon, StyledDrpDown } from "../../../components/style";

import maleImage from "../../../assets/img/male.png";
import femaleImage from "../../../assets/img/female.png";
import Logo from "../../../assets/img/logo.png";

import { calcViewMode } from "../../../utils/utils";
import { Theme } from "../../../utils/theme";

export const HeaderLayout = (props) => {
  // state props
  const { pathname, pageTitle, collaspe } = props;

  // dispatch props
  const { redirect, logOut, setCollaspe } = props;

  let genderImage = maleImage;

  let viewMode = calcViewMode();

  let navColor = Theme.SideBarColor;
  let activeColor = Theme.PrimaryTextColor;

  if (pathname === "/media") {
    navColor = Theme.PrimaryColor;
    activeColor = "#fff";
  }

  return (
    <Boxed
      style={{
        top: "0",
        zIndex: "300",
      }}
      width="inherit"
      position="fixed"
      height="59px"
      bColor={navColor}
    >
      <Container fluid>
        <Row>
          <Col
            className="px-0"
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 4 }}
            xs={{ span: 4 }}
          >
            <Boxed
              align={viewMode === "mobile" ? "left" : "center"}
              display="flex"
              height="100%"
            >
              {viewMode === "mobile" ? (
                <Boxed margin="auto" display="flex" pad="0 0.5rem">
                  <Boxed pad="0 1rem" display="flex">
                    <Icon
                      margin="auto 0"
                      color={Theme.SecondaryTextColor}
                      className="icon icon-menu"
                      onClick={() => setCollaspe(!collaspe)}
                    ></Icon>
                  </Boxed>

                  <img
                    src={Logo}
                    alt="logo"
                    height="40px"
                    onClick={() => redirect("/dashbaord")}
                  />
                </Boxed>
              ) : null}
              {pageTitle && (
                <Text margin="auto 5px" fontWeight="bold">
                  {pageTitle}
                </Text>
              )}
            </Boxed>
          </Col>

          <Col
            className="px-0"
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
          >
            <Boxed className="px-1" align="right" display="flex">
              <Boxed display="flex" margin="0 0 0 auto" height="58px">
                <Boxed height="59px" display="flex">
                  <Icon
                    className="icon-search-1"
                    margin="auto 5px"
                    pad="5px"
                    cursor="pointer"
                    border={`1px solid ${Theme.SecondaryTextColor}`}
                    color={Theme.SecondaryTextColor}
                    borderRadius="50%"
                  />
                  <StyledDrpDown style={{ margin: "auto 0" }}>
                    <Dropdown>
                      <Dropdown.Toggle variant id="dropdown-basic">
                        <Label fontSize="13px" lineHeight="33px" pad="0">
                          <Avatar src={genderImage} size="35px" /> Gabriel
                          <i
                            className="icon icon-angle-down"
                            fontSize="16px"
                            color={Theme.PrimaryTextColor}
                            pad="0.15rem 0.35rem"
                          />
                        </Label>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => redirect("/profile")}>
                          View Profile
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => logOut()}>
                          Log Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </StyledDrpDown>
                </Boxed>
              </Boxed>
            </Boxed>
          </Col>
        </Row>
      </Container>
    </Boxed>
  );
};

HeaderLayout.propTypes = {};
