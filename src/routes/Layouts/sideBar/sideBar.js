import React from "react";

import styled, { css } from "styled-components";
import { Boxed } from "../../../components/Boxed.components";
import { Theme } from "../../../utils/theme";

import LOGO from "../../../assets/img/logo.png";

const SideList = styled.div`
  padding: 15px 0;
  background: ${Theme.SideBarColor};
  color: ${Theme.PrimaryTextColor};
  width: ${(props) => (props.collaspe ? "60px" : "230px")};
  position: fixed;
  overflow: hidden;
  transition: all 0.5s;
  -webkit-transition: all 0.25s;

  ${(props) =>
    props.float &&
    css`
      z-index: 300;
      width: ${(props) => (props.collaspe ? "0" : "230px")};
      min-height: 100vh;
    `}

  .sideList-toggle {
    text-align: right;
    padding: 0.25rem 1rem;
    ${(props) =>
      props.collaspe &&
      css`
        transform: rotate(180deg);
        text-align: "center";
      `}

    > span {
      cursor: pointer;
    }
  }

  .sideList-group {
    padding: 0.75rem 0;
  }

  .sideList-title {
    font-size: 12px;
    color: ${Theme.PrimaryFontColor};
    margin: 0;
    padding: 0.5rem 1rem;
    opacity: ${(props) => (props.collaspe ? "0" : "1")};
  }

  & ul {
    list-style-type: none;
    padding: 0 5px;
    margin: 0;

    & li {
      font-size: 12px;
      padding: ${(props) => (props.collaspe ? "0.5rem" : "0.5rem 1rem")};
      color: ${Theme.PrimaryTextColor};
      cursor: pointer;
      display: flex;
      overflow: hidden;
      width: ${(props) => (props.collaspe ? "50px" : "unset")};
      transition: all 0.5s;
      -webkit-transition: all 0.25s;
      cursor: pointer;
      border-radius: ${Theme.SecondaryRadius};

      :hover {
        background: ${Theme.PrimaryDark};

        & i {
          color: ${Theme.PrimaryColor};
        }
      }

      & i {
        font-size: 16px;
        padding: 0 0.5rem;
      }

      .sideList-label {
        padding: 0 1rem;
        font-weight: bold;
        opacity: ${(props) => (props.collaspe ? "0" : "1")};
        margin: auto 0;
        ${(props) =>
          props.collaspe &&
          css`
            display: none;
          `}
      }
    }

    .active {
      color: ${Theme.PrimaryColor};
    }
  }
`;

export const SideBar = (props) => {
  // state props received
  const {
    dataList,
    pathname,
    openMediaMenu,
    collaspe,
    float,
    viewMode,
    profile,
    menuMode,
  } = props;

  // dispatch props received
  const { redirect, toggleSidebar, setPageTitle } = props;

  const onItemClick = (pathname, pageTitle) => {
    viewMode !== "desktop" && toggleSidebar(true);
    setPageTitle(pageTitle);
    redirect(pathname);
  };

  let btnLeft = "10.5rem";
  float && collaspe && (btnLeft = "-100px");
  !float && collaspe && (btnLeft = "0.5rem");

  return (
    <SideList collaspe={collaspe} float={float}>
      <Boxed display="flex">
        <img
          src={LOGO}
          height={collaspe ? "50px" : "80px"}
          style={{ margin: "auto", cursor: "pointer", padding: "5px" }}
          alt="app-logo"
          onClick={() => toggleSidebar(!collaspe)}
        />
      </Boxed>
      {dataList &&
        dataList.map((item, index) => {
          return (
            <div className="sideList-group" key={index}>
              <h3 className="sideList-title">{item.title}</h3>
              <ul>
                {item.list.map((subItem, subIndex) => {
                  return (
                    <li
                      key={subIndex}
                      className={pathname === subItem.pathname ? "active" : ""}
                      onClick={
                        pathname === subItem.pathname
                          ? null
                          : () => onItemClick(subItem.pathname, subItem.label)
                      }
                    >
                      <i className={`icon ${subItem.icon}`} />{" "}
                      <span className="sideList-label">{subItem.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </SideList>
  );
};

SideBar.propTypes = {};
