import React, { useState } from "react";
import { Modal } from "antd";
import ReactMarkdown from "react-markdown";
import { PolicyWrapper, Large, Title, MarkdownContent } from "./styles";
import { PolicyProps } from "./types";
import policyContent from "../../content/PolicyContent.json"; // Import the policy content

const Policy: React.FC<PolicyProps> = ({ t }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handlePolicyClick = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <PolicyWrapper>
      <Title>{t("Policy")}</Title>
      <Large onClick={() => handlePolicyClick(t(policyContent.refundPolicy.title), policyContent.refundPolicy.content)}>
        {t("Refund Policy")}
      </Large>
       <Large onClick={() => handlePolicyClick(t(policyContent.privacyPolicy.title), policyContent.privacyPolicy.content)}>
        {t("Privacy Policy")}
      </Large>
      <Large onClick={() => handlePolicyClick(t(policyContent.termsOfService.title), policyContent.termsOfService.content)}>
        {t("Terms of Service")}
      </Large> 
      <Modal
        visible={modalVisible}
        title={modalTitle}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <MarkdownContent>
          <ReactMarkdown>{modalContent}</ReactMarkdown>
        </MarkdownContent>
      </Modal>
    </PolicyWrapper>
  );
};

export default Policy;