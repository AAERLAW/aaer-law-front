import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "../utils/theme";

export const Text = styled.p`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : Theme.PrimaryFontSize};
  color: ${(props) => (props.color ? props.color : Theme.PrimaryTextColor)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  display: ${(props) => (props.display ? props.display : "0")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : Theme.PrimaryFontFamily};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
    ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight};
    `}
	${(props) =>
    props.bColor &&
    css`
      background: ${props.bColor};
    `}

	${(props) =>
    props.hoverBColor &&
    css`
      :hover {
        background: ${props.hoverBColor};
      }
    `}
	${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `}
`;
