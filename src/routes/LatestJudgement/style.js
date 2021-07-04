import React from "react";
import styled from "styled-components";
import { Theme } from "../../utils/theme";

export const StyledTabs = styled.div`
  & .nav-tabs,
  & .tab-content {
    padding: 0 10px;
  }

  & .nav-tabs {
    .nav-item {
      border-radius: ${`${Theme.SecondaryRadius} ${Theme.SecondaryRadius} 0 0`};
      font-size: ${Theme.PrimaryFontSize};
      font-weight: bold;
      color: ${Theme.SecondaryTextColor};
    }

    .nav-link {
      color: ${Theme.SecondaryTextColor};
    }
    .disabled {
      opacity: 0.35;
    }
  }
`;
