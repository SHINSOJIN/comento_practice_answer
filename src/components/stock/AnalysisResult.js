import React from "react";
import DemoPie from "./Chart";

const AnalysisResult = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class='chartExplain'>
        <p class='subtitle result'>Result</p>
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
            {" "}
            •{" "}
          </span>
          한솔케미칼
        </p>
        <p class='subtitle list'>List</p>
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
            {" "}
            •{" "}
          </span>
          한솔케미칼 74%
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
            {" "}
            •{" "}
          </span>
          SK 24%
        </p>
      </div>
      <div class='chart'>
        <DemoPie />
      </div>
      <div class='detailExplain'>
        <p class='subtitle result' style={{ textAlign: "left" }}>
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
              {" "}
              •{" "}
            </span>
            한솔케미칼
          </p>
          <p style={{ width: "270px" }}>
            "Score": 0.7434849143028259 <br />
            "Logit": 21.697523117065
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
              {" "}
              •{" "}
            </span>
            SK
          </p>
          <p style={{ width: "270px" }}>
            "Score": 0.24532733857631683
            <br /> "Logit": 20.588768005371
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
