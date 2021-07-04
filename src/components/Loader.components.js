import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "../utils/theme";

const StyledLoader = styled.div`
  position: relative;
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};

  /* ============================ */
  /* SPINNER GENERAL              */
  /* ============================ */

  %bar {
    width: 8px;
    height: 40px;
    background-color: ${Theme.PrimaryColor};
    border-radius: 4px;
  }

  .spinner {
    display: inline-block;
    position: relative;
    width: 8px;
    height: 40px;
    background-color: ${Theme.PrimaryColor};
    border-radius: 4px;

    :after,
    :before {
      content: "";
      position: absolute;
      display: block;
      width: 8px;
      height: 40px;
      background-color: ${Theme.PrimaryColor};
      border-radius: 4px;
      top: 0px;
    }
    &:before {
      left: -12px;
    }
    &:after {
      left: 12px;
    }
  }

  /* ============================ */
  /* SPINNER BOUNCE BOTTOM        */
  /* ============================ */

  @keyframes bounce-bottom {
    0% {
      height: 10px;
      margin-top: 30px;
    }
    50% {
      height: 40px;
      margin-top: 0px;
    }
    100% {
      height: 10px;
      margin-top: 30px;
    }
  }

  @mixin bounce-bottom($dur: 0.5s, $delay: 0s) {
    animation: bounce-bottom $dur ease $delay infinite;
  }

  .spinner-bounce-bottom {
    animation: bounce-bottom 0.5s ease 0.1s infinite;
    :before,
    :after {
      top: auto;
      bottom: 0px;
    }
    :before {
      animation: bounce-bottom 0.6s ease 0s infinite;
    }
    :after {
      animation: bounce-bottom 0.5s ease 0.2s infinite;
    }
  }
`;

const SpinnerLoader = styled.div`
  position: relative;
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};

  .spinner {
    -moz-animation: rotate 10s infinite linear;
    -webkit-animation: rotate 10s infinite linear;
    animation: rotate 10s infinite linear;
    position: relative;
    display: block;
    margin: auto;
    width: 72px;
    height: 72px;
  }
  .spinner i {
    -moz-animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
    -webkit-animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
    animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
    -moz-transform-origin: 50% 100% 0;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    border: solid 6px transparent;
    border-bottom: none;
  }
  .spinner i:nth-child(1) {
    -moz-animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
    -webkit-animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
    animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
    width: 44px;
    height: 22px;
    margin-top: -22px;
    margin-left: -22px;
    border-color: #ed3237;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }
  .spinner i:nth-child(2) {
    -moz-animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
    -webkit-animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
    animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
    width: 58px;
    height: 29px;
    margin-top: -29px;
    margin-left: -29px;
    border-color: #ed3236;
    border-top-left-radius: 42px;
    border-top-right-radius: 42px;
  }
  .spinner i:nth-child(3) {
    -moz-animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
    -webkit-animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
    animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
    width: 72px;
    height: 36px;
    margin-top: -36px;
    margin-left: -36px;
    border-color: #ed3235;
    border-top-left-radius: 48px;
    border-top-right-radius: 48px;
  }

  @-moz-keyframes rotate {
    to {
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    to {
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Loader = (props) => {
  const { margin } = props;
  return (
    <SpinnerLoader margin={margin}>
      <div className="spinner">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </SpinnerLoader>
  );
};
