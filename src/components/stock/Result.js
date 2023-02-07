import AnalysisResult from "./AnalysisResult";
import SentenceResult from "./SentenceResult";
import LoadingSpinner from "../../assets/LoadingSpinner";

const Result = ({ analysisResult, sentenceResult, loading }) => {
  console.log(loading);
  return (
    <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
      <div className='resultArea inner'>
        <div className='resultSection1'>
          <p className='title'>분석결과</p>
          <div className='visualization'>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {analysisResult.length ? (
                  <AnalysisResult
                    analysisResult={analysisResult}
                    loading={loading}
                  />
                ) : (
                  <span className='empty'>
                    뉴스를 입력하고 결과를 확인하세요
                  </span>
                )}
              </>
            )}
          </div>
        </div>
        <div className='resultSection2'>
          <p className='title'>Sentence 분석</p>
          <div className='visualization'>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {sentenceResult.length ? (
                  <SentenceResult sentenceResult={sentenceResult} />
                ) : (
                  <span className='empty'>
                    뉴스를 입력하고 결과를 확인하세요
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
