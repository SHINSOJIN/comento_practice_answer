import React from "react";
import DemoPie from "./Chart";

const AnalysisResult = ({ analysisResult }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='chartExplain'>
        <p className='subtitle result'>Result</p>
        <p
          style={{
            marginTop: "24px",
            height: "19px",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              marginTop: "0px",
              fontSize: "30px",
              verticalAlign: "sub",
              color: "rgb(99, 149, 249)",
            }}
          >
            •
          </span>
          {analysisResult[0].stock}
        </p>
        <p className='subtitle list'>List</p>
        <p
          style={{
            marginTop: "12px",
            height: "19px",
            fontWeight: "bold",
            color: "rgb(99, 149, 249)",
          }}
        >
          <span
            style={{
              marginTop: "0px",
              fontSize: "30px",
              verticalAlign: "sub",
              color: "rgb(99, 149, 249)",
            }}
          >
            •
          </span>
          {analysisResult[0].stock} {analysisResult[0].score.toFixed(2) * 100}%
        </p>
        <p
          style={{
            marginTop: "12px",
            height: "19px",
            fontWeight: "bold",
            color: "rgb(98, 218, 171)",
          }}
        >
          <span
            style={{
              marginTop: "0px",
              fontSize: "30px",
              verticalAlign: "sub",
              color: "rgb(98, 218, 171)",
            }}
          >
            •
          </span>
          {analysisResult[1].stock} {analysisResult[1].score.toFixed(2) * 100}%
        </p>
      </div>
      <div className='chart'>
        <DemoPie analysisResult={analysisResult} />
      </div>
      <div className='detailExplain'>
        <p className='subtitle result' style={{ textAlign: "left" }}>
          세부 분석결과
        </p>
        <div>
          <p
            style={{
              marginTop: "0px",
              height: "19px",
              fontWeight: "bold",
              width: "130px",
            }}
          >
            <span
              style={{
                marginTop: "-20px",
                fontSize: "30px",
                verticalAlign: "sub",
                color: "rgb(99, 149, 249)",
              }}
            >
              •
            </span>
            {analysisResult[0].stock}
          </p>
          <p style={{ width: "270px" }}>
            "Score": {analysisResult[0].score} <br />
            "Logit": {analysisResult[0].logit}
          </p>
        </div>
        <div>
          <p
            style={{
              marginTop: "0px",
              height: "19px",
              fontWeight: "bold",
              width: "130px",
            }}
          >
            <span
              style={{
                marginTop: "-20px",
                fontSize: "30px",
                verticalAlign: "sub",
                color: "rgb(98, 218, 171)",
              }}
            >
              •
            </span>
            {analysisResult[1].stock}
          </p>
          <p style={{ width: "270px" }}>
            "Score": {analysisResult[1].score}
            <br /> "Logit": {analysisResult[1].logit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
