import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import NEWSDATA from "../../assets/common/sampleNews";

const NewsInsert = ({ buttonHandler, currentTab, setCurrentTab }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(NEWSDATA[currentTab].query);
    setContent(NEWSDATA[currentTab].context);
  }, [currentTab]);

  // useEffect(() => {
  //   if (currentTab === 0) {
  //     setTitle(NEWSDATA[0].query);
  //     setContent(NEWSDATA[0].context);
  //   } else if (currentTab === 1) {
  //     setTitle(NEWSDATA[1].query);
  //     setContent(NEWSDATA[1].context);
  //   } else if (currentTab === 2) {
  //     setTitle(NEWSDATA[2].query);
  //     setContent(NEWSDATA[2].context);
  //   } else {
  //     setTitle(NEWSDATA[3].query);
  //     setContent(NEWSDATA[3].context);
  //   }
  // }, [currentTab]);

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
              className={currentTab === 0 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(0)}
            >
              카카오
            </span>
            <span
              className={currentTab === 1 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(1)}
            >
              화장품
            </span>
            <span
              className={currentTab === 2 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(2)}
            >
              삼성
            </span>
            <span
              className={currentTab === 3 ? "keywordBtn click" : "keywordBtn"}
              onClick={() => setCurrentTab(3)}
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
            readOnly={true}
            value={title}
          />
          <div>
            <textarea
              rows='12'
              aria-invalid='false'
              id='inputContext'
              placeholder='뉴스 본문'
              style={{ height: "276px" }}
              value={content}
              readOnly={true}
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
        <a href='/'>
          <Button
            variant='contained'
            className='analysisBtn'
            onClick={(e) => buttonHandler(e)}
          >
            추출하기
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NewsInsert;
