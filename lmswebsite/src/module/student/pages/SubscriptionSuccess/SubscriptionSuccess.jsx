import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Spin, Button, Typography } from "antd"; // Importing Ant Design components
import { getPackageById } from "../../../../api/packagesApi";
import {SubscriptionSuccessWrap} from "./SubscriptionSuccess.style";

const { Title, Text } = Typography;

const SubscriptionSuccess = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get("packageId");
  const status = searchParams.get("status");
  const [packageName, setPackageName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (packageId) {
      const apiCaller = async () => {
        try {
          const response = await getPackageById(packageId);
          setPackageName(response.package_name);
        } catch (err) {
          console.error("Error fetching Packages:", err);
        }
      };
      apiCaller();
    }
  }, [packageId]);

  const handleGoToDashboard = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      navigate("/student/dashboard"); // Simulate loading before navigating
    }, 1000);
  };

  return (
   
    <SubscriptionSuccessWrap>
      {packageName ? (
        <>
          <Title level={2} className="SubscriptionSuccessWrap-title1">
            Subscription Successful!
          </Title>
          <Text className="SubscriptionSuccessWrap-title2">
            {status === "approved"
              ? "You have successfully subscribed to your CustomPackage package."
              : `You have successfully subscribed to the "${packageName}" package.`}
          </Text>
          <Button
            type="primary"
            size="large"
            loading={isLoading} // Show spinner when loading
            onClick={handleGoToDashboard}
            className="SubscriptionSuccessWrap-btn"
          >
            {isLoading ? "Loading Dashboard..." : "Go to Dashboard"}
          </Button>
        </>
      ) : (
        <Spin size="large" />
      )}
   </SubscriptionSuccessWrap>
  );
};

export default SubscriptionSuccess;
