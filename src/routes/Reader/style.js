import React from "react";
import styled from "styled-components";
import { darken, lighten, desaturate, transparentize } from "polished";
import PDFViewer from "mgr-pdf-viewer-react";

import { Theme } from "../../utils/theme";

export const StyledReader = styled.div`
  font-family: ${(props) => props.theme.PrimaryFontFamily};
  canvas {
    width: 100% !important;
    height: unset !important;
    padding: 10px;
    background: ${Theme.PrimaryDark};
    border-radius: 5px;
  }

  .mgrpdf-navigation__controls--wrapper {
    background-color: ${Theme.PrimaryDark} !important;
    padding: 10px;
    border-radius: ${Theme.SecondaryRadius};
    color: ${Theme.SecondaryTextColor} !important;

    .mgrpdf-navigation__controls--previous,
    .mgrpdf-navigation__controls--next {
      cursor: pointer;
      margin: 0 0px;
      height: 40px;
      padding: 10px 22px;
      font-size: 13px;
      line-height: 20px;
      background-color: ${(props) => darken(0.05, props.theme.PrimaryColor)};
      border-radius: ${(props) => props.theme.PrimaryRadius};
      color: ${(props) => "#fff"};
      border: 1px solid transparent;
      text-align: center;

      &:hover {
        background-color: ${(props) =>
          props.color
            ? darken(0.1, props.color)
            : darken(0.1, props.theme.PrimaryColor)};
      }
    }

    .mgrpdf-navigation__controls--pages {
      border-radius: ${Theme.SecondaryRadius};
      margin: 0 0px;
      height: 40px;
      padding: 10px 22px;
      font-size: 13px;
      line-height: 20px;
      background-color: ${Theme.TertiaryDark};
      border-radius: ${(props) => props.theme.PrimaryRadius};
      color: ${(props) => Theme.PrimaryTextColor};
      border: 1px solid transparent;
      text-align: center;
    }

    .mgrpdf-navigation__controls--disabled {
      background-color: grey;
      &:hover {
        background-color: grey;
        cursor: no-drop !important;
      }
    }
  }
`;

export const PDFReader = (props) => {
  return (
    <StyledReader>
      <PDFViewer {...props} />
    </StyledReader>
  );
};
