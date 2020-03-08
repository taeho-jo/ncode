import React, { useEffect } from "react";
import styled from "styled-components";
import MainDetail from "../components/MainDetail";
import Layout from "../components/Layout/Layout";

const FeedDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);

  return (
    <Container>
      <Layout />
      <ContainerBox>
        <MainDetail />
      </ContainerBox>
    </Container>
  );
};

export default FeedDetail;

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContainerBox = styled.article`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
`;
