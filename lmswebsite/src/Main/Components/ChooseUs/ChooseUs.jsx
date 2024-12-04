import React from "react";
import {
  ChooseUsWarp,
  ChooseUsHeader,
  ChooseUsCard,
  ChooseUsCardWrapper,
  ChooseUsIcons,
  ChooseUsTitle,
  ChooseUsDescription,
} from "./Choose.style";

const ChooseUs = ({ data }) => {
  return (
    <ChooseUsWarp>
      <ChooseUsHeader>Why Choose Us?</ChooseUsHeader>
      <ChooseUsCard>
        {data?.features?.slice(-3).map((item, index) => (
          <ChooseUsCardWrapper key={index}>
            <ChooseUsIcons>
              <img src={item.imageUrl} alt={item.name} />
            </ChooseUsIcons>
            <ChooseUsTitle>{item.name}</ChooseUsTitle>
            <ChooseUsDescription>{item.description}</ChooseUsDescription>
          </ChooseUsCardWrapper>
        ))}
      </ChooseUsCard>
    </ChooseUsWarp>
  );
};

export default ChooseUs;
