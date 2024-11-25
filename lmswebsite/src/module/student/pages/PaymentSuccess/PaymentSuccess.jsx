// PaymentSuccess.jsx

import React from "react";
import { Container, Message, ButtonContainer } from "./PaymentSuccess.style";
import { Button } from "antd"; // Using Ant Design's Button component
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../style/theme/theme";
const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/student/dashboard"); // Adjust the route as needed
  };

  return (
    <Container>
      <Message>Your payment was successful!</Message>
      <ButtonContainer>
        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: theme.colors.pink6 }}
          onClick={handleGoToDashboard}
        >
          Go to My Dashboard
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default PaymentSuccess;
