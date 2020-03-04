import React from "react";
import styled from "styled-components";

import bigheart from "../../../images/bigheart.png";
import fillheart from "../../../images/fillheart.png";

const DetailTitle = ({ title, border, onClick, heartNum }) => {
  return (
    <Div>
      <Title>{title}</Title>
      <Box>
        <HeartBox
          border={border ? "1px solid #d4237a" : "1px solid #c1c2c4"}
          onClick={onClick}
        >
          <img
            style={{ width: "24px" }}
            src={border ? fillheart : bigheart}
            alt="heart"
          />
        </HeartBox>
        <HeartNum>{heartNum}</HeartNum>
      </Box>
    </Div>
  );
};

export default DetailTitle;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Box = styled.div`
  padding-top: 15px;
`;

const HeartNum = styled.p`
  color: #c1c2c4;
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
`;

const HeartBox = styled.div`
  border: ${props => props.border};
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  max-width: 90%;
`;
