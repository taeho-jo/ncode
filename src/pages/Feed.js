import React from "react";
import styled from "styled-components";
import MainFeed from "../components/MainFeed";

const Feed = () => {
  return (
    <ContainerBox>
      <Container>
        <MainFeed />
      </Container>
    </ContainerBox>
  );
};

export default Feed;

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
