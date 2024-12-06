import styled from "styled-components";
 

// Existing color variables
const colors = {
    primary: "#ff0080", // Pink
    heading: "#333333", // Dark gray for headings
    subheading: "#555555", // Light gray for subheadings
    bodyText: "#666666", // Gray for text
    cardBackground: "#f9f9f9", // Light gray for card background
    buttonActiveBackground: "#ff0080",
    buttonDefaultBackground: "#fff",
    buttonHoverBackground: "#ff0080",
    secondary: "#6c757d", // Gray for secondary buttons
    danger: "#dc3545", // Red for danger buttons
  };
 
// Container for study materials
export const StudyMaterialsContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: white;
`;

export const PageContainer = styled.div` 

  background-color: white;
  @media (min-width: 768px) {
     padding: 40px;
  }
   @media (max-width: 768px) {
     padding: 40px;
  }
 
  @media (max-width: 480px) {
     padding: 20px;
  }
`   
 
// Heading
export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.heading};
  position: relative;
 
  @media (max-width: 768px) {
    font-size: 28px; /* Slightly smaller for tablets */
  }
 
  @media (max-width: 480px) {
    font-size: 24px; /* Even smaller for mobile */
  }
`;
 
// Underline below the heading
export const HeadingUnderline = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${colors.primary};
  margin: 8px auto 0;
`;
 
// Class buttons container
export const ClassButtons = styled.div`
  margin-top: 20px;
`;
 
// Single class button
export const ClassButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? colors.buttonActiveBackground : colors.buttonDefaultBackground)};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
 
  &:hover {
    background-color: ${colors.buttonHoverBackground};
    color: #fff;
    border-color: ${colors.buttonHoverBackground};
  }
`;
 
// Grid container for materials
export const MaterialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
`;
 
// Material card
export const MaterialCard = styled.div`
  width: 220px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${colors.cardBackground};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
 
  @media (max-width: 768px) {
    width: 200px; /* Adjust card width for tablets */
  }
 
  @media (max-width: 480px) {
    width: 180px; /* Adjust card width for mobile */
  }
`;
 
// Subheading (For materials or sections under the main heading)
export const Subheading = styled.h2`
  font-size: 28px;
  color: ${colors.subheading};
  font-weight: bold;
 
  @media (max-width: 768px) {
    font-size: 22px; /* Smaller subheading for tablets */
  }
 
  @media (max-width: 480px) {
    font-size: 18px; /* Even smaller for mobile */
  }
`;
 
// Body text or paragraph
export const BodyText = styled.p`
  font-size: 16px;
  color: ${colors.bodyText};
  line-height: 1.6;
 
  @media (max-width: 768px) {
    font-size: 14px; /* Smaller text for tablets */
  }
 
  @media (max-width: 480px) {
    font-size: 12px; /* Even smaller for mobile */
  }
`;

// Base Button with common styles
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

// Base Button Style
export const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 0, 128, 0.5);
  }
   @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

// Primary Button
export const PrimaryButton = styled(BaseButton)`
  background-color: ${colors.primary};
  color: #fff;
  border-color: ${colors.primary};
   font-size: 16px;
  
  &:hover {
    background-color: ${colors.buttonHoverBackground};
    border-color: ${colors.buttonHoverBackground};
  }
  
  &:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    cursor: not-allowed;
  }

   @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;


// Secondary Button
export const SecondaryButton = styled(BaseButton)`
  background-color: ${colors.buttonDefaultBackground};
  color: ${colors.secondary};
  border-color: ${colors.secondary};
  
  &:hover {
    background-color: ${colors.secondary};
    color: #fff;
    border-color: ${colors.secondary};
  }
  
  &:disabled {
    background-color: #f2f2f2;
    border-color: #cccccc;
    color: #999999;
    cursor: not-allowed;
  }

   @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;


// Danger Button
export const DangerButton = styled(BaseButton)`
  background-color: ${colors.buttonDefaultBackground};
  color: ${colors.danger};
  border-color: ${colors.danger};
  
  &:hover {
    background-color: ${colors.danger};
    color: #fff;
    border-color: ${colors.danger};
  }
  
  &:disabled {
    background-color: #f2f2f2;
    border-color: #cccccc;
    color: #999999;
    cursor: not-allowed;
  }

   @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

// Icon Button (Assuming you might use it with an icon library like FontAwesome or Material Icons)
export const IconButton = styled(BaseButton)`
  padding: 8px;
  border-radius: 50%;
  
  svg {
    width: 20px;
    height: 20px;
  }
     @media (min-width: 768px) {
    padding: 6px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  
  @media (max-width: 768px) {
    padding: 6px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 4px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ModalBody = styled.div`
  max-height: 500px; /* Default fixed height */
  overflow-y: auto;
  scroll-behavior: smooth;

   @media (min-width: 768px) {
    max-height: 400px; /* Slightly smaller for tablets */
  }

  @media (max-width: 768px) {
    max-height: 400px; /* Slightly smaller for tablets */
  }

  @media (max-width: 480px) {
    max-height: 300px; /* Even smaller for mobile */
  }

  /* Customize scrollbar for better aesthetics (optional) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #b3b3b3;
  }
`;
