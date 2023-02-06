import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DATA from "../../assets/common/sampleNews";

const NewsInsert = () => {
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    if (currentTab === 1) {
      setTitle(DATA[0].query);
      setContent(DATA[0].context);
    } else if (currentTab === 2) {
      setTitle(DATA[1].query);
      setContent(DATA[1].context);
    } else if (currentTab === 3) {
      setTitle(DATA[2].query);
      setContent(DATA[2].context);
    } else {
      setTitle(DATA[3].query);
      setContent(DATA[3].context);
    }
  }, [currentTab]);

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
            <span
              className={currentTab === 1 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(1)}
            >
              카카오
            </span>
            <span
              className={currentTab === 2 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(2)}
            >
              화장품
            </span>
            <span
              className={currentTab === 3 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(3)}
            >
              삼성
            </span>
            <span
              className={currentTab === 4 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(4)}
            >
              스마트폰
            </span>
          </div>
        </div>
        <div className='inputWrapper'>
          <input
            aria-invalid='false'
            id='inputTitle'
            placeholder='뉴스 제목'
            type='text'
            value={title} // 질문. 콘솔창 에러를 막기 위해서 defaultValue로 설정하면 에러가 [object Object]뜸
          />
          <div>
            <textarea
              rows='12'
              aria-invalid='false'
              id='inputContext'
              placeholder='뉴스 본문'
              style={{ height: "276px" }}
              defaultValue={content}
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
          <Button variant='contained' className='analysisBtn'>
            추출하기
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NewsInsert;
