import React from "react";
import { BsLightningCharge } from "react-icons/bs"; // Import the icon
import {
  Container,
  Header,
  ToggleContainer,
  ToggleSwitch,
  PlanContainer,
  Plan,
  PlanTitle,
  PlanPrice,
  PlanDescription,
  PlanFeatures,
  Feature,
  GetStartedButton,
} from "./OneStudentExistingPackage.style";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Basic plan",
    price: "₹500/Month",
    billed: "Billed annually",
    features: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    name: "Business plan",
    price: "₹1500/Month",
    billed: "Billed annually",
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support",
    ],
  },
  {
    name: "Enterprise plan",
    price: "₹2500/Month",
    billed: "Billed annually",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized + priority service",
    ],
  },
];

const OneStudentExistingPackage = ({data,studentId}) => {
  return (
    <Container>
      <Header>
        <p className="Price-Plans">Pricing Plans</p>
        <h2>Existing Packages</h2>
        <p>Simple, transparent pricing that grows with you.</p>
      </Header>
      <ToggleContainer>
        <label>
          <ToggleSwitch type="checkbox" />
          <span>Annual pricing (save 20%)</span>
        </label>
      </ToggleContainer>

      {/* Clip-path div */}
      <div className="clip-path-bg"></div>
      <PlanContainer>
        {data.map((pkg, index) => (
          <Plan key={index}>
            <PlanTitle>
              <BsLightningCharge
                style={{
                  display: "block",
                  margin: "0 auto 8px",
                  color: "blue",
                  backgroundColor: "#7ebaff",
                  borderRadius: "50%",
                  border: "3px solid #ddedff ",
                }}
                size={20}
              />
              {pkg.package_name}
            </PlanTitle>
            <PlanPrice>₹ {pkg.price}</PlanPrice>
            <PlanDescription>{pkg.description}</PlanDescription>
            <PlanFeatures>
              {pkg.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <TiTick
                    style={{
                      color: "blue",
                      backgroundColor: "#ddedff",
                      borderRadius: "50%",
                      border: "3px solid #ddedff",
                      marginRight: "8px",
                    }}
                    size={20}
                  />
                  <Feature>{feature}</Feature>
                </div>
              ))}
            </PlanFeatures>
            <Link to = {`/student/course/details`} state={{data:pkg,studentId}}>
            <GetStartedButton>Get started </GetStartedButton>
            </Link>
          </Plan>
        ))}
      </PlanContainer>
    </Container>
  );
};

export default OneStudentExistingPackage;
