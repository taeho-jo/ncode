import React from "react";
import styled from "styled-components";
import MainDetail from "../components/MainDetail";

const DetailFeed = () => {
  return (
    <Container>
      <ContainerBox>
        <MainDetail />
      </ContainerBox>
    </Container>
  );
};

export default DetailFeed;

const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 30px 0;
`;

const ContainerBox = styled.article`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
`;
