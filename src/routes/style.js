import styled from "styled-components";
import { Theme } from "../utils/theme";

export const HeaderNav = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;

  > li {
    font-size: 18px;
    font-weight: 600;
    color: ${Theme.PrimaryTextColor};
    margin: auto 25px;
    cursor: pointer;

    & :hover {
      color: ${Theme.PrimaryColor};
    }
  }
`;

export const FooterNav = styled.ul`
  list-style: none;
  margin: 0;

  > li {
    font-size: 14px;
    color: ${Theme.PrimaryTextColor};
    margin: 20px 10px;
    cursor: pointer;

    :hover {
      color: ${Theme.PrimaryColor};
    }

    &.title {
      font-weight: bold;
      cursor: none;
      margin: 0 10px 30px 10px;
      :hover {
        color: ${Theme.PrimaryTextColor};
      }
    }
  }
`;
