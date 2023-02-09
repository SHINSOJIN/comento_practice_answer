import {useState, useEffect} from 'react';
import sampleNews  from "../../assets/datas/sampleNews";

const NewsInsert = ({keywordIdx, setKeywordIdx, analysisClick}) => {
    const [title, setTitle] = useState('')
    const [context, setContext] = useState('')

    useEffect(()=> {
        setTitle(sampleNews[keywordIdx].query)
        setContext(sampleNews[keywordIdx].context)
    }, [keywordIdx])

    return (
        <>
            <h3 className="title">지금 원하는 뉴스의 종목명을 추출해보세요!</h3>
            <div className="inputArea inner">
                <div className="keywordBtnWrapper">
                    <div className="keywordBtnList">
                        <div></div>
                        <span><strong>샘플 뉴스</strong></span>
                        <span className={`keywordBtn ${keywordIdx === 0 ? 'click' : ''}`} onClick={()=>setKeywordIdx(0)}>카카오</span>
                        <span className={`keywordBtn ${keywordIdx === 1 ? 'click' : ''}`} onClick={()=>setKeywordIdx(1)}>화장품</span>
                        <span className={`keywordBtn ${keywordIdx === 2 ? 'click' : ''}`} onClick={()=>setKeywordIdx(2)}>삼성</span>
                        <span className={`keywordBtn ${keywordIdx === 3 ? 'click' : ''}`} onClick={()=>setKeywordIdx(3)}>스마트폰</span>
                    </div>
                </div>
                <div className="inputWrapper">
                    <div>
                        <div>
                            <input aria-invalid="false" id="inputTitle" placeholder="뉴스 제목" type="text"
                                   defaultValue={title}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea rows="12" aria-invalid="false" id="inputContext" placeholder="뉴스 본문" style={{height: '276px'}} defaultValue={context}/>
                        </div>
                    </div>
                </div>
                <button className="analysisBtn" tabIndex="0" type="button" onClick={analysisClick}>종목명 추출하기</button>
            </div>

        </>
    );
};

export default NewsInsert;
