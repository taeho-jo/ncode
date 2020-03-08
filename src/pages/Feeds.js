import React from "react";
import styled from "styled-components";
import MainFeeds from "../components/MainFeeds";
import Layout from "../components/Layout/Layout";

const Feeds = () => {
  return (
    <ContainerBox>
      <Layout />
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
  flex-direction: column;
`;

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
`;
