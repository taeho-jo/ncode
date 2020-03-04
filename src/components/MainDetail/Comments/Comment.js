import React, { useState } from "react";
import styled from "styled-components";
import commentsStore from "../../../store/commentsStore";
import CommentsBox from "./CommentsBox";
import { useObserver } from "mobx-react";

import arrow from "../../../images/right2.png";
import arrow1 from "../../../images/right.png";

const Comment = () => {
  const [reply, setReply] = useState(null);

  return useObserver(() => {
    const addReply = id => {
      const a = commentsStore.Data.filter(
        el => parseInt(el.id) === parseInt(id)
      );
      setReply(a[0].id);
      if (id === reply) {
        setReply(null);
      }
    };

    return commentsStore.Data.map(el => (
      <div key={el.id}>
        <Container>
          <NameBox>
            <Name>{el.userName}</Name>
            <Date>{el.createdAt.slice(0, 10)}</Date>
          </NameBox>
          <Contents>{el.comment}</Contents>
          <Button onClick={() => addReply(el.id)}>
            <Img src={arrow} alt="dd" />
            답글
          </Button>
          {reply === el.id ? <CommentsBox /> : ""}
        </Container>
        {el.replies
          ? el.replies.list.map(el => (
              <Container key={el.id} margin="10px">
                <NameBox>
                  <Img src={arrow1} alt="dd" />
                  <Name>{el.userName}</Name>
                  <Date>{el.createdAt.slice(0, 10)}</Date>
                </NameBox>
                <Contents>{el.comment}</Contents>
                <Button>
                  <Img src={arrow} alt="dd" />
                  답글
                </Button>
              </Container>
            ))
          : null}
      </div>
    ));
  });
};

export default Comment;

const Container = styled.div`
  border-bottom: 1px solid #c1c2c4;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.margin};
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Name = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const Date = styled(Name)`
  margin-left: 20px;
`;

const Contents = styled(Name)`
  margin-bottom: 15px;
`;
const Img = styled.img`
  width: 14px;
`;

const Button = styled.button`
  background: #fff;
  font-size: 12px;
  border: 3px solid #f9f9f9;
  width: 54px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
