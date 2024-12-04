import styled from "styled-components";
import { theme, media } from "../../../../style/theme/theme";

export const UserManagementWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding:10px;

  .area-row {
    display: flex;
    gap: 24px;

    &.ar-one {
      justify-content: space-between;
      align-items: center;
    }

    &.ar-three {
      display: block;
    }

    ${media.md`
      flex-direction: column;
    `}
  }

  .UserManagement-batch_title {
    font-family: ${theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px;
  }

  .UserManagement-controls {
    display: flex;
    align-items: center;
    gap: 16px;

    ${media.md`
      flex-direction: column;
      gap: 10px;
      align-items: stretch;
    `}
  }

  .UserManagement-search {
    width: 300px;
    height: auto;
    border-radius: 6px;

    .ant-input {
      border: 1px solid ${theme.colors.gray300};
    }

    ${media.md`
      width: 100%;
    `}
  }

  .UserManagement-filter {
    display: flex;
    align-items: center;
    gap: 10px;

    .UserManagement-filter-icon {
      font-size: 18px;
      color: ${theme.colors.gray700};
    }

    .UserManagement-dropdown {
      width: 150px;

      .ant-select-selector {
        border-radius: 6px !important;
        height: auto !important;
        display: flex;
        align-items: center;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray300};
      }

      .ant-select-selection-item {
        font-size: 14px;
        color: ${theme.colors.gray700};
      }
    }
  }

  .ant-table {
    background-color: ${theme.colors.white};
    border-radius: 8px;

    .ant-table-thead > tr > th {
      background: ${theme.colors.gray100};
      color: ${theme.colors.gray700};
      font-weight: bold;
    }

    .ant-table-tbody > tr > td {
      color: ${theme.colors.gray700};
    }

    .ant-pagination-item-active {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  }
`;
