import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Layout = ({ history }) => {
  const backHome = () => {
    history.goBack();
  };

  return (
    <Header>
      <Home onClick={backHome}>HOME</Home>
    </Header>
  );
};

export default withRouter(Layout);

const Header = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: #2f3640;
  z-index: 1;
`;

const Home = styled.p`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-left: 20px;
`;
