// CustomerQuery.styles.js
import styled from "styled-components";
import { media, theme } from "../../../../style/theme/theme";

export const CustomerQueryWrap = styled.div`
  .CustomerQueries-batches_nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    margin: 0;

    ${media.md`
      flex-direction: column;
      align-items: stretch;
      padding: 1em;
    `}
  }

  .CustomerQueries-batch_title {
    font-family: ${theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    flex:1;
  }

  .CustomerQueries-search {
    max-width: 320px;
    width: 100%;
    margin-right:25px;
    // height:40px;
    flex: 0 0 auto;
    align-items: center; 
    font-size: 14px;

    ${media.md`
      max-width: 100%;
      margin-top: 1em;
    `}

    .ant-input {
      border-radius: 6px;
      height:auto;
      padding: 0 12px;
    }
  }

  .CustomerQueries-filter {
    display: flex;
    align-items: center;
    margin:0px;
  }

  .CustomerQueries-filter-dropdown {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 5px;
    background-color: ${theme.colors.white};
    margin-top: 10px;
    margin-bottom: 0px;
    ${media.md`
      font-size: 14px;
    `}

    .ant-select {
      width: 120px;
      margin-top: -10px;
    }
  }

  .CustomerQueries-filter-icon {
    font-size: 18px;
    color: ${theme.colors.gray700};
    margin-right: 8px;
  }

  .area-row {
    display: flex;
    gap: 24px;

    &.ar-one {
      justify-content: space-between;
    }

    &.ar-two {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &.ar-three {
      display: block;
    }

    ${media.md`
      flex-direction: column;
    `}
  }
`;
