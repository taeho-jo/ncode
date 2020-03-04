import React from "react";
import styled from "styled-components";
import MainFeeds from "../components/MainFeeds";

const Feeds = () => {
  return (
    <ContainerBox>
      <Container>
        <MainFeeds />
      </Container>
    </ContainerBox>
  );
};

export default Feeds;

const ContainerBox = styled.main`
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
`;
