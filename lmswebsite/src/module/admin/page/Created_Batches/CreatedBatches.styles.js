import styled from "styled-components";
import { theme } from "../../../../style/theme/theme";

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-family: ${theme.typography.fontFamily};
      font-size: 1.8rem;
      font-weight: bold;
      color: ${theme.colors.black};
    }

    .actions {
      display: flex;
      gap: 16px;

      .ant-input {
        border-radius: 4px;
        height: 30px;
      }

      .ant-btn {
        height: 40px;
        display: flex;
        align-items: center;
      }
    }
  }

  .ant-table {
    margin-top: 20px;
  }
  .ant-modal-close {
    top: 8px;
    right: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #999;

    &:hover {
      color: #333;
    }
  }
`;


