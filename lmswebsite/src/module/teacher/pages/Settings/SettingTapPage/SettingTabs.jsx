import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CreditCardOutlined,
  BellOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import GeneralSettings from "../GeneralSettings/GeneralSettings";
import AccountSettings from "../AccountSettings/AccountSettings";
import PaymentSettings from "../PaymentSettings/PaymentSettings";
import TermsConditionSettings from "../TermsConditionSettings/TermsConditionSettings";
import PushNotificationSettings from "../PushNotificationSettings/PushNotificationSettings";
import { StyledMenuItem } from "../SettingTapPage/SettingTabs.style";

const { Sider, Content } = Layout;

const SettingsTabs = () => {
  const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state
  const [activeTab, setActiveTab] = useState("general");

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />;
      case "account":
        return <AccountSettings />;
      case "billing":
        return <PaymentSettings />;
      case "terms":
        return <TermsConditionSettings />;
      case "notifications":
        return <PushNotificationSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  const handleMenuClick = (e) => {
    setActiveTab(e.key); // Set active tab based on menu item key
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div className="settings-sider "
          style={{
            height: 32,
            margin: 16,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Settings
        </div>

        <Menu
          mode="inline"
          selectedKeys={[activeTab]}
          onClick={handleMenuClick}
        >
          <StyledMenuItem key="general" icon={<SettingOutlined />}>
            General
          </StyledMenuItem>
          <StyledMenuItem key="account" icon={<UserOutlined />}>
            Account
          </StyledMenuItem>
          <StyledMenuItem key="billing" icon={<CreditCardOutlined />}>
            Payment & Billing
          </StyledMenuItem>
          <StyledMenuItem key="notifications" icon={<BellOutlined />}>
            Push Notification
          </StyledMenuItem>
          <StyledMenuItem key="terms" icon={<FileTextOutlined />}>
            Terms & Condition
          </StyledMenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SettingsTabs;
