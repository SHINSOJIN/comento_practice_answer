import AnalysisResult from "./AnalysisResult";
import SentenceListResult from "./SentenceListResult";

const Result = () => {
  return (
    <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
      <div className="resultArea inner">
        <div className="resultSection1">
          <p className="title">분석결과</p>
          <div className="visualization">
            <AnalysisResult />
          </div>
        </div>
        <div className="resultSection2">
          <p className="title">Sentence 분석</p>
          <div className="visualization">
            <SentenceListResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
