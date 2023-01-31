import AnalysisResult from "./AnalysisResult";
import SentenceResult from "./SentenceResult";

const Result = () => {
  return (
    <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
      <div className='resultArea inner'>
        <div className='resultSection1'>
          <p className='title'>분석결과</p>
          <div className='visualization'>
            {/* <span className='empty'>뉴스를 입력하고 결과를 확인하세요</span> */}
            <AnalysisResult />
          </div>
        </div>
        <div className='resultSection2'>
          <p className='title'>Sentence 분석</p>
          <div className='visualization'>
            {/* <span className='empty'>뉴스를 입력하고 결과를 확인하세요</span> */}
            <SentenceResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
