import React from "react";
import styled from "styled-components";

const TitleBox = () => {
  return (
    <TitleBoxBack>
      <Num>Nums</Num>
      <Title>Title</Title>
      <Date>Date</Date>
      <Comments>Comments</Comments>
    </TitleBoxBack>
  );
};

const TitleBoxBack = styled.div`
  display: flex;
  align-items: center;
  min-width: 900px;
  min-height: 50px;
  border: 1px solid white;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: bold;
  background-color: black;
`;

const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
  color: white;
`;

const Title = styled(Num)`
  width: 55%;
`;

const Date = styled(Num)``;
const Comments = styled(Num)``;

export default TitleBox;
