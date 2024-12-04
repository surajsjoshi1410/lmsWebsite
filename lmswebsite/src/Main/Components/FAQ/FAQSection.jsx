import React, { useState } from "react";
import { Modal } from "antd";
import {
  FAQWarp,
  FAQHeader,
  FAQContainer,
  FAQCard,
  FAQQuestion,
  FAQSign,
  ToggleIcon,
  FAQQueryContainer,
  FAQQuerySection,
  FAQQueryDetails,
  FAQQueryTitle,
  FAQQuerySubtitle,
  FAQQueryButton,
} from "./FAQSection.styles";
import QueryImage from "../../assets/Contactimage.jpeg";
import LandingPageContactUs from "../LandingPageContactUs/LandingPageContactUs";

const FAQSection = ({ data }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <FAQWarp>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
      <FAQContainer>
        {data && data.length > 0 ? (
          data.map((FAQ, index) => (
            <FAQCard key={index}>
              <FAQQuestion onClick={() => handleToggle(index)}>
                <span>{FAQ.question}</span>
                <ToggleIcon>{expandedFAQ === index ? "–" : "+"}</ToggleIcon>
              </FAQQuestion>
              {expandedFAQ === index && <FAQSign>{FAQ.answer}</FAQSign>}
            </FAQCard>
          ))
        ) : (
          <p>No FAQs available at the moment.</p>
        )}
      </FAQContainer>
      <FAQQueryContainer>
        <FAQQuerySection>
          <FAQQueryDetails>
            <FAQQueryTitle>Have a Question? Let’s ask</FAQQueryTitle>
            <FAQQuerySubtitle>
              If you are confused or in doubt, you can contact us for free. We
              will be happy to help.
            </FAQQuerySubtitle>
            <FAQQueryButton onClick={showModal}>Contact Us</FAQQueryButton>
          </FAQQueryDetails>
          <img src={QueryImage} alt="Query Image" />
        </FAQQuerySection>
      </FAQQueryContainer>
      <Modal
        title="Contact Us"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <LandingPageContactUs onClose={handleCancel} />
      </Modal>
    </FAQWarp>
  );
};

export default FAQSection;
