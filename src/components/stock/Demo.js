import React, { useState, Suspense } from "react";
import NewsInsert from "./NewsInsert";
import axios from "axios";
import LoadingSpinner from "../../assets/LoadingSpinner";
const Result = React.lazy(() => import("./Result")); // suspense 사용해서 로딩해보기

const Demo = () => {
  const [analysisResult, setAnalysisResult] = useState({});
  const [sentenceResult, setSentenceResult] = useState({});
  const [stockList, setStockList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(null);

  const buttonHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = "https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io";

    axios
      .get(`${url}/stock/news?idx=${currentTab}`)
      .then((response) => {
        console.log(response.data.answer);
        setAnalysisResult(response.data.answer);
        setSentenceResult(response.data.sentence);
        setStockList(
          response.data.sentence
            .map((data) => data.condition)
            .flat()
            .sort((a, b) => b.score - a.score)
            .map((stock) => stock.stock)
            .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), [])
        );
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
        <Suspense fallback={<LoadingSpinner />}>
          <Result
            analysisResult={analysisResult}
            sentenceResult={sentenceResult}
            stockList={stockList}
            loading={loading}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Demo;
