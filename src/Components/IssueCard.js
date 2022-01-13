import React from "react";
import styled from "styled-components";

const IssueCard = ({ data }) => {
  return (
    <IssueCardBack>
      <IssueContents>
        <IssueNumber>{data.number}</IssueNumber>
        <IssueTitle>{data.title}</IssueTitle>
        <IssueDate>
          {data.updated_at.replace("T", " ").replace("Z", " ")}
        </IssueDate>
        <IssueComments>{data.comments}</IssueComments>
      </IssueContents>
    </IssueCardBack>
  );
};

const IssueCardBack = styled.div`
  min-width: 900px;
  min-height: 50px;
  border: 1px solid black;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

const IssueContents = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  height: 50px;
  font-size: 20px;
`;

const IssueNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
`;
const IssueTitle = styled(IssueNumber)`
  justify-content: flex-start;
  width: 55%;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const IssueDate = styled(IssueNumber)`
  font-size: 10px;
`;
const IssueComments = styled(IssueNumber)``;

export default IssueCard;
