import React, { useState } from "react";
import NewsInsert from "./NewsInsert";
import Result from "./Result";
import axios from "axios";

const Demo = () => {
  const [analysisResult, setAnalysisResult] = useState({});
  const [sentenceResult, setSentenceResult] = useState({});
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(null);

  const buttonHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = "https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io";

    axios
      .get(`${url}/stock/news?idx=${currentTab}`)
      .then((response) => {
        setAnalysisResult(response.data.answer);
        setSentenceResult(response.data.sentence);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className='demoContainer'>
        <NewsInsert
          buttonHandler={buttonHandler}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          loading={loading}
        />
        <Result
          analysisResult={analysisResult}
          sentenceResult={sentenceResult}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Demo;
