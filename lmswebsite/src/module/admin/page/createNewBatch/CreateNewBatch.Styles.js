import styled from "styled-components";

export const CreateNewBatchWrap = styled.div`
  .ant-modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .ant-btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }

    .ant-form {
    padding: 20px!important; /* Add padding to the form */
  }
    .ant-modal-content {
        right: -100px;
    top: -340px;}
`;