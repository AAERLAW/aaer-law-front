import React from "react";
import Select from "react-select";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled, { css } from "styled-components";
import { transparentize, lighten } from "polished";
import { Theme } from "../utils/theme";

export const Label = styled.p`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : Theme.PrimaryFontSize};
  font-weight: normal;
  font-family: ${Theme.PrimaryFont};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.pad ? props.pad : "0.15rem 10px")};
  color: ${(props) => (props.color ? props.color : Theme.PrimaryFontColor)};
  letter-spacing: 0.45;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "unset")};
`;

export const Warning = styled.em`
  padding: 0.15rem 10px;
  margin: 0;
  padding: 0;
  line-height: 11px;
  text-align: right;
  font-size: 10px;
  font-weight: normal;
  width: 100%;
  color: red;
`;

const InputWrapper = styled.div`
  form {
    margin: 2em 0;
  }
  /**
* Make the field a flex-container, reverse the order so label is on top.
*/

  .field {
    display: flex;
    flex-flow: column-reverse;
  }
  /**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  input {
    font-size: 1.5em;
    border: 0;
    border-bottom: 1.5px solid #707070;
    font-family: inherit;
    -webkit-appearance: none;
    cursor: text;
  }

  input:focus {
    outline: 0;
  }

  label {
    font-size: ${Theme.SecondaryFontSize};
    position: absolute;
    top: 14px;
    left: 12px;
    color: ${Theme.PrimaryTextColor};
  }
  /**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
  input:placeholder-shown + label,
  input:focus + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 0) scale(1);
  }
  /**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
  input {
    ::-webkit-input-placeholder {
      transition: inherit;
      ${(props) =>
        props.label &&
        css`
          opacity: 0;
        `}
    }
    ::-moz-placeholder {
      transition: inherit;
      ${(props) =>
        props.label &&
        css`
          opacity: 0;
        `}
    }
    ::-moz-placeholder {
      transition: inherit;
      ${(props) =>
        props.label &&
        css`
          opacity: 0;
        `}
    }
  }
  /**
* Show the placeholder when the input is focused.
*/
  input:focus {
    ::-webkit-input-placeholder {
      opacity: 1;
      color: ${Theme.SecondaryTextColor};
    }
    ::-moz-placeholder {
      opacity: 1;
      color: ${Theme.SecondaryTextColor};
    }
    ::-moz-placeholder {
      opacity: 1;
      color: ${Theme.SecondaryTextColor};
    }
  }
  /**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
  input:not(:placeholder-shown) + label,
  input:focus + label,
  .gelacop-select:focus-within + label,
  .label-float,
  .react-datepicker-wrapper:focus-within + label {
    transform-origin: left bottom;
    transform: translate(0, -12px) scale(0.75);
    cursor: pointer;
    color: ${Theme.PrimaryColor};
  }

  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}

  & p.title {
    text-align: left;
    font-size: 13px;
  }
  & p.warning-text {
    text-align: right;
  }

  & i {
    position: absolute;
    font-size: 13px;
    color: #4cd964;
    right: 25px;
    top: 35%;

    ${(props) =>
      props.small &&
      css`
        margin: 10px 0 10px -50px;
      `}
  }

  & .react-datepicker-wrapper {
    width: 100%;
  }

  & .react-datepicker {
    display: flex;
  }

  & .input--wrapper {
    position: relative;
  }

  & .gelacop__menu {
    ${"" /* background-color: ${Theme.QuaternaryDark}; */}
    color: ${Theme.PrimaryTextColor};
    border-radius: ${Theme.SecondaryRadius};
    padding: 12px 10px;
    margin: 2px 0 0 0;
    text-align: left;
    box-shadow: 0px 3px 6px #00000025;

    & .gelacop__menu-list {
      max-height: 200px;

      & .gelacop__option {
        border-radius: ${Theme.SecondaryRadius};
        hieght: 40px;
        padding: 8px 30px;
        font-size: ${Theme.SecondaryFontSize};
        cursor: pointer;
      }
      & .gelacop__option--is-focused {
        ${
          "" /* background-color: ${transparentize(0.1, Theme.TertiaryDark)}; */
        }
      }

      & .gelacop__option--is-selected {
        ${"" /* background-color: ${Theme.TertiaryDark}; */}
        color: ${Theme.PrimaryTextColor};
      }
    }
  }

  & input,
  textarea,
  .gelacop__control {
    box-shadow: none;
    position: relative;
    background-color: #f6f6f9;
    height: ${(props) => (props.height ? props.height : "40px")};
    border-radius: ${Theme.SecondaryRadius};
    border: 1px solid #ececee;
    width: 100%;
    padding: 10px 10px 10px 10px;
    font-size: 13px;
    font-weight: normal;
    color: ${(props) => (props.color ? props.color : Theme.PrimaryColor)};

    :focus {
      outline: none;
      color: ${Theme.PrimaryTextColor};
      border-bottom: ${`1.2px solid ${Theme.PrimaryColor}`};
    }

    & .gelacop__value-container {
      padding: 2px 0px;
      width: 90%;
      height: 20px;

      & .gelacop__placeholder {
        color: ${transparentize(0.2, Theme.PrimaryTextColor)};
      }

      & .gelacop__single-value,
      .gelacop__input {
        color: ${(props) =>
          props.color ? props.color : Theme.PrimaryTextColor};
        transform: unset;
      }
    }

    & .gelacop__indicators {
      position: absolute;
      right: 15px;
      top: 0%;
      height: 100%;

      & .gelacop__indicator.gelacop__dropdown-indicator {
        color: ${Theme.PrimaryColor};
      }
    }

    & .gelacop__indicator-separator {
      display: none;
    }

    :hover {
      border: ${`1.5px solid ${Theme.PrimaryColor}`};
      background: #f6f6f9;
      outline: none;
    }

    ${(props) =>
      props.error &&
      css`
        border: ${`1.5px solid ${Theme.PrimaryRed}`};
      `}

    ${(props) =>
      props.rounded &&
      css`
        border-radius: 26px;
        padding: 10px 20px 10px 30px;
      `}

    ${(props) =>
      props.pale &&
      css`
        background-color: ${(props) =>
          props.color
            ? transparentize(0.85, props.color)
            : transparentize(0.85, Theme.PrimaryDark)};
        color: ${(props) => (props.color ? props.color : "#fff")};

        ::-webkit-input-placeholder {
          /* Edge */
          color: ${transparentize(0.2, "#fff")};
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${transparentize(0.2, "#fff")};
        }

        ::placeholder {
          color: ${transparentize(0.2, "#fff")};
        }

        &:hover {
          background-color: ${(props) =>
            props.color
              ? transparentize(0.8, props.color)
              : transparentize(0.8, Theme.PrimaryColor)};
          color: ${Theme.PrimaryTextColor};
        }

        :focus {
          outline: none;
          color: ${Theme.PrimaryTextColor};
        }
      `}  

    ${(props) =>
      props.small &&
      css`
        height: ${(props) => (props.height ? props.height : "40px")};
        padding: 10px 20px 10px 15px;
      `}
  }
  & em {
    display: inline-block;
    position: absolute;
    bottom: -19.5px;
    color: #fd0541;
    left: 10px;
    font-style: italic;
    font-size: 0.7em;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.75;

      label {
        color: ${Theme.PrimaryTextColor} !important;
      }
    `}
`;

export class Input extends React.Component {
  render() {
    return (
      <InputWrapper
        disabled={this.props.disabled}
        error={this.props.error}
        value={this.props.value}
        rounded={this.props.rounded}
        pale={this.props.pale}
        color={this.props.color}
        height={this.props.height}
        small={this.props.small}
        display={this.props.display}
        label={this.props.label}
      >
        {/* <div className="input--wrapper field">
          {this.props.label && (
            <label className="title">{this.props.label}</label>
          )}
          <input
            type={this.props.type ? this.props.type : 'text'}
            {...this.props}
          />
          {this.props.error && <em>{this.props.error}</em>}
        </div> */}
        <div class="input--wrapper field">
          <input
            type={this.props.type ? this.props.type : "text"}
            {...this.props}
          />
          {this.props.label && (
            <label className={this.props.value ? "label-float" : null}>
              {this.props.label}
            </label>
          )}
          {this.props.error && <em>{this.props.error}</em>}
        </div>
      </InputWrapper>
    );
  }
}

export class Textarea extends React.Component {
  render() {
    return (
      <InputWrapper
        disabled={this.props.disabled}
        error={this.props.error}
        value={this.props.value}
        rounded={this.props.rounded}
        pale={this.props.pale}
        color={this.props.color}
        height={this.props.height}
        small={this.props.small}
        display={this.props.display}
      >
        <div className="input--wrapper field">
          <textarea
            type={this.props.type ? this.props.type : "text"}
            cols={this.props.cols}
            rows={this.props.rows}
            {...this.props}
          />
          {this.props.label && (
            <label className={this.props.value ? "label-float" : null}>
              {this.props.label}
            </label>
          )}
          {this.props.error && <em>{this.props.error}</em>}
        </div>
      </InputWrapper>
    );
  }
}

export class AsyncSelect extends React.Component {
  render() {
    return (
      <InputWrapper
        disabled={this.props.disabled}
        error={this.props.error}
        value={this.props.value}
        rounded={this.props.rounded}
        pale={this.props.pale}
        color={this.props.color}
        height={this.props.height}
        small={this.props.small}
        display={this.props.display}
      >
        <div className="input--wrapper field">
          <Select
            {...this.props}
            isDisabled={this.props.disabled}
            classNamePrefix="gelacop"
            className="gelacop-select"
          />

          {this.props.label && (
            <label className={this.props.value ? "label-float" : null}>
              {this.props.label}
            </label>
          )}
          {this.props.error && <em>{this.props.error}</em>}
        </div>
      </InputWrapper>
    );
  }
}

export class InputDate extends React.Component {
  render() {
    return (
      <InputWrapper
        disabled={this.props.disabled}
        error={this.props.error}
        value={this.props.value}
        rounded={this.props.rounded}
        pale={this.props.pale}
        color={this.props.color}
        height={this.props.height}
        small={this.props.small}
        display={this.props.display}
        label={this.props.label}
      >
        <div className="input--wrapper field">
          <DatePicker
            style={{ width: "100%" }}
            className="w-100"
            {...this.props}
          />
          {this.props.label && (
            <label className={this.props.value ? "label-float" : null}>
              {this.props.label}
            </label>
          )}
          <i
            className="icon-calendar"
            style={this.props.color ? { color: this.props.color } : null}
          ></i>
          {this.props.error && <em>{this.props.error}</em>}
        </div>
      </InputWrapper>
    );
  }
}

const CheckWrapper = styled.label`
  display: flex;
  flex-wrap: no-wrap;
  cursor: pointer;

  & input {
    padding: 5px 10px;
    display: block;
    margin: ${(props) => (props.vAlign ? "auto 0" : "0")};
    height: 0px;
    border-radius: 4px;
    position: relative;
    -moz-appearance: initial;

    :before {
      content: "";
      border: 1px solid ${lighten(0.15, Theme.SecondaryDark)};
      background: ${Theme.SecondaryDark};
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid #70707070;
      display: block;
    }

    :after {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      display: block;
      position: absolute;
      top: 0;
      margin: 4px;
    }

    :checked {
      background: #fff;

      :after {
        content: "";
        background: ${Theme.PrimaryColor};
      }
    }
  }

  & .title {
    margin: auto 0;
    padding: 0 0 0 20px;
  }
`;

export class Checkbox extends React.Component {
  render() {
    return (
      <CheckWrapper vAlign={this.props.vAlign}>
        <input
          name={this.props.name}
          type="checkbox"
          defaultChecked={this.props.defaultChecked}
          checked={this.props.checked}
          onClick={() => this.props.onClick()}
        />
        <Label className="title" fontSize={this.props.fontSize}>
          {this.props.label} {this.props.children}
        </Label>
      </CheckWrapper>
    );
  }
}

const RadioWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    margin: auto 0;
  }

  .title {
    margin: auto 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 1px solid #eee;
    border-radius: 50%;
  }

  :hover input ~ .checkmark {
    background-color: transparent;
    border: 1px solid #707070;
  }

  input:checked ~ .checkmark {
    background-color: transparent;
    border: 1px solid ${Theme.PrimaryRed};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    background: #eee;
  }

  :hover input ~ .checkmark:after {
    background-color: #707070;
  }

  input:checked ~ .checkmark:after {
    display: block;
    background: ${Theme.PrimaryRed};
  }

  .checkmark:after {
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

export const RadioButton = (props) => {
  const { label, name, value, onClick, checked } = props;
  return (
    <RadioWrapper>
      <input
        type="radio"
        checked={checked}
        name={name}
        value={value}
        onClick={onClick}
      />{" "}
      {label}
      <span class="checkmark"></span>
    </RadioWrapper>
  );
};
