import React, { Component } from "react";
import { FacebookProvider, Share } from "react-facebook";
import styled from "styled-components";
import facebookIcon from "../images/facebook.png";

export default class Example extends Component {
  render() {
    // console.log(window.location.href, "재영이");
    return (
      <FacebookProvider appId="130487101715335">
        <Share href={window.location.href}>
          {({ handleClick, loading }) => (
            <Button disabled={loading} onClick={handleClick}></Button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}

const Button = styled.div`
  margin-top: 15px;
  background-image: url(${facebookIcon});
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: cover;
`;
