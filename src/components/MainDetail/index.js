import React, { useState, useEffect } from "react";
import styled from "styled-components";
import feedStore from "../../store/feedStore";
import DetailTitle from "./DetailTitle/DetailTitle";
import CommentsBox from "./Comments/CommentsBox";
import Comment from "./Comments/Comment";
import Facebook from "../../utils/Facebook";
import { withRouter } from "react-router-dom";
import { useObserver } from "mobx-react";

const MainDetail = ({ match, history }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      feedStore.Data.filter(el => parseInt(el.id) === parseInt(match.params.id))
    );
  }, [match.params.id]);

  const addLikeNum = () => {
    feedStore.addLike(match.params.id);
  };
  const click = () => {
    history.push("/");
  };

  return useObserver(() => {
    if (data[0] === undefined) return <></>;

    const Data = data[0];

    const img = Data.mediaList.map((el, index) => (
      <Image key={index} src={el.url} alt={el.id} />
    ));
    const tags = Data.tags.map((el, index) => (
      <Tag key={index}>#{el}&nbsp;</Tag>
    ));

    const indexNumber = Data.text.indexOf(".");

    return (
      <>
        <ImgContainger onClick={click}>{img}</ImgContainger>
        <TextContainer>
          <TextBox>
            <Name>{Data.mdInfo.mdName}&emsp;</Name>
            <Date>{Data.createdAt.slice(0, 10)}</Date>
            <DetailTitle
              title={Data.text.slice(0, indexNumber + 1)}
              border={Data.like}
              onClick={addLikeNum}
              heartNum={Data.likedCount === undefined ? 0 : Data.likedCount}
            />
            <Contents>{Data.text}</Contents>
            {tags}
            <Facebook />
            <TextAreaBox>COMMENTS</TextAreaBox>
            <CommentsBox />
            {match.params.id === "448" ? <Comment /> : null}
          </TextBox>
        </TextContainer>
      </>
    );
  });
};

export default withRouter(MainDetail);

const ImgContainger = styled.section`
  width: 35%;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const TextContainer = styled.section`
  width: 65%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 900px;
  border-top: 3px solid black;
  font-size: 18px;
  padding-top: 38px;
`;

const Name = styled.span`
  font-weight: 900;
  color: #1d1e21;
`;
const Date = styled.span`
  margin-left: 20px;
`;

const Contents = styled.p`
  margin-top: 20px;
  font-size: 14px;
  height: auto;
  line-height: 1.6;
  padding: 18px 0 24px;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
  line-height: 1.6;
  white-space: pre-wrap;
`;
const Tag = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
`;

const TextAreaBox = styled.div`
  border-top: 2px solid #d9d9d9;
  margin-top: 30px;
  padding-top: 30px;
  font-size: 18px;
  font-weight: 900;
`;
