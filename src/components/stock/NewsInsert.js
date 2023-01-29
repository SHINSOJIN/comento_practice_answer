const NewsInsert = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <h3 className='title'>지금 원하는 뉴스의 종목명을 추출해보세요!</h3>
      <div className='inputArea inner'>
        <div className='keywordBtnWrapper'>
          <div className='keywordBtnList'>
            <div></div>
            <span>
              <strong>샘플 뉴스</strong>
            </span>
            <span className='keywordBtn '>카카오</span>
            <span className='keywordBtn '>화장품</span>
            <span className='keywordBtn '>삼성</span>
            <span className='keywordBtn '>스마트폰</span>
          </div>
        </div>
        <div className='inputWrapper'>
          <input
            aria-invalid='false'
            id='inputTitle'
            placeholder='뉴스 제목'
            type='text'
            value=''
          />
          <div>
            <textarea
              rows='12'
              aria-invalid='false'
              id='inputContext'
              placeholder='뉴스 본문'
              style={{ height: "276px" }}
            ></textarea>
            <textarea
              aria-hidden='true'
              readOnly=''
              tabIndex='-1'
              style={{
                visibility: "hidden",
                position: "absolute",
                overflow: "hidden",
                height: "0px",
                top: "0px",
                left: "0px",
                transform: "translateZ(0px)",
                padding: "0px",
                width: "1213.97px",
              }}
            ></textarea>
          </div>
        </div>
        <a href='result.html'>
          <button className='analysisBtn' tabIndex='0' type='button'>
            추출하기
          </button>
        </a>
      </div>
    </div>
  );
};

export default NewsInsert;
