import React, { useEffect } from "react";
import styled from "styled-components";
import feedStore from "../../store/feedStore";
import commentsStore from "../../store/commentsStore";

import { withRouter } from "react-router-dom";
import { useObserver } from "mobx-react";

import Icon from "../../images/heart.png";
import Icon1 from "../../images/chat.png";
import Icon2 from "../../images/share.png";
import Icon3 from "../../images/heart1.png";

const MainFeeds = ({ history }) => {
  useEffect(() => {
    if (!feedStore.Data[0]) {
      feedStore.fecthData();
      commentsStore.fecthData();
    }
  }, []);

  const movePage = id => {
    history.push(`/feed/${id}`);
  };

  return useObserver(() =>
    feedStore.Data.map(el => (
      <ContentContainer onClick={() => movePage(el.id)} key={el.id}>
        <Img src={el.mediaList[0].url} alt="dd" />
        <Tags>
          {el.tags.map(el => (
            <p key={el}>#{el}&nbsp;</p>
          ))}
        </Tags>
        <TextBox>
          <P>{el.text}</P>
        </TextBox>
        <DateBox>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <div>
            <IconImg src={el.like ? Icon3 : Icon} alt="heart" />
            <Span>{el.likedCount === undefined ? 0 : el.likedCount}</Span>
            <IconImg src={Icon1} alt="heart" />
            <Span>{el.replyCount === undefined ? 0 : el.replyCount}</Span>
            <IconImg src={Icon2} alt="heart" />
            <Span>{el.sharedCount === undefined ? 0 : el.sharedCount}</Span>
          </div>
        </DateBox>
      </ContentContainer>
    ))
  );
};

export default withRouter(MainFeeds);

const ContentContainer = styled.div`
  width: 100%;
  max-width: 33.3333%;
  padding: 0 20px;
  margin: 20px 0;
`;

const Img = styled.img`
  width: 100%;
`;
const Tags = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const TextBox = styled.div`
  margin-top: 20px;
`;

const P = styled.p`
  font-size: 14px;
  height: auto;
  height: 263px;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Date = styled.p`
  color: #a6a7a9;
  font-size: 14px;
`;

const IconImg = styled.img`
  margin: 0 3px;
`;

const Span = styled.span`
  margin: 0 3px;
  font-size: 14px;
  color: #a6a7a9;
`;
