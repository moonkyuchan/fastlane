import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IssueCard from "./Components/IssueCard";
import TitleBox from "./Components/TitleBox";
import axios from "axios";

const App = () => {
  const [IssuesData, setIssuesData] = useState([]);

  useEffect(() => {
    getIssues();
  }, []);

  const getIssues = async () => {
    await axios
      .get("https://api.github.com/repos/facebook/create-react-app/issues")
      .then((res) => {
        const sortedData = res.data.sort((a, b) => {
          return a.comments < b.comments ? 1 : -1;
        });
        setIssuesData(sortedData);
      });
  };

  return (
    <AppBack>
      <IssueTitle>Issue</IssueTitle>
      <IssueBox>
        <TitleBox />
        {IssuesData.map((data, idx) => {
          return <IssueCard key={idx} data={data} />;
        })}
      </IssueBox>
    </AppBack>
  );
};

const AppBack = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 40px;
`;

const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  font-size: 50px;
  margin-bottom: 30px;
  ::before {
    width: 60px;
    height: 60px;
    content: "";
    background: url("/Images/github.png");
    background-size: cover;
    margin-right: 10px;
  }
`;

const IssueBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 1000px;
  border: 2px solid black;
  padding: 30px;
  overflow-y: scroll;
`;

export default App;
