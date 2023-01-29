const NewsInsert = () => {

    return (
        <>
            <h3 className="title">지금 원하는 뉴스의 종목명을 추출해보세요!</h3>
            <div className="inputArea inner">
                <div className="keywordBtnWrapper">
                    <div className="keywordBtnList">
                        <div></div>
                        <span><strong>샘플 뉴스</strong></span>
                        <span className="keywordBtn ">카카오</span>
                        <span className="keywordBtn click ">화장품</span>
                        <span className="keywordBtn ">삼성</span>
                        <span className="keywordBtn ">스마트폰</span>
                    </div>
                </div>
                <div className="inputWrapper">
                    <div>
                        <div>
                            <input aria-invalid="false" id="inputTitle" placeholder="뉴스 제목" type="text"
                                   value="&quot;한솔케미칼, 올해·내년 영업이익 전망치 하향에 목표가↓&quot;-SK"/>
                        </div>
                    </div>
                    <div>
                        <div>
                                <textarea
                                    rows="12" aria-invalid="false" id="inputContext" placeholder="뉴스 본문"
                                    style={{height: '276px'}}>SK증권은 한솔케미칼에 대해 올해와 내년 연결 영업이익 전망치 하향이 예상된다며 투자의견은 '매수'를 유지했으나 목표주가는 28만원으로 15% 하향했다.한동희 SK증권 연구원은 24일 "3분기 실적 부진과 내년 업황 둔화를 감안해 한솔케미칼의 올해와 내년 연결 영업이익 전망치를 각각 12%, 13% 하향 조정한다"고 말했다. 앞서 한솔케미칼의 3분기 연결 실적은 매출 2160억원, 영업이익 457억원으로 시장컨센서스를 각각 6%, 16% 하회했다. 당초 3분기 TV 등 성수기 진입 효과에 따른 퀀텀닷(QD) 소재 회복을 예상했으나 글로벌 경기 위축에 따른 전방 재고 조정으로 QD 소재 및 테이팩스의 스마트폰향 판매 부진, 천연가스 및 유가 등 원재료 가격 상승 영향으로 과산화수소의 수익성이 하락한 영향으로 추정된다.올해 4분기 연결 실적은 매출 2355억원, 영업이익 353억원으로 예상된다. QD 소재는 전방 재고조정 일단락 효과에 따른 회복, 과산화수소는 원재료 가격 상승분의 판가 전가로 수익성이 회복되기 시작할 것으로 전망된다.
                                </textarea>
                        </div>
                    </div>
                </div>
                <button className="analysisBtn" tabIndex="0" type="button">종목명 추출하기</button>
            </div>

        </>
    );
};

export default NewsInsert;
