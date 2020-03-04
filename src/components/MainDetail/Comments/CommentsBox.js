import React from "react";
import styled from "styled-components";

const CommentsBox = () => {
  return (
    <>
      <Div>
        <CommentsArea />
        <Button>댓글등록</Button>
      </Div>
    </>
  );
};

export default CommentsBox;

const Div = styled.div`
  display: flex;
`;
const CommentsArea = styled.textarea`
  width: 80%;
  height: 100px;
  margin-top: 15px;
  padding: 15px;
  resize: none;
  font-weight: 800;
`;
const Button = styled.button`
  width: 20%;
  height: 100px;
  margin-top: 15px;
  padding: 15px;
  border: none;
  background: #1d1e21;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background: #2c3e50;
  }
`;
