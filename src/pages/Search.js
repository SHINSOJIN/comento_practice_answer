import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {getKeywordResult} from "../apis/stock_api";
import '../assets/search.css'

const Search = () => {
    const [btnDisabled, setBtnDisabled] = useState(true); //선택 버튼 비활성여부
    const [keyword, setKeyword] = useState(''); // 요청 param 상태
    const [newsList, setNewsList] = useState([]); // 키워드 검색 API 결과값 저장
    const [resultAlert, setResultAlert] = useState('검색 결과'); //키워드 검색결과 문구
    const [selectNewsTitle, setSelectNewsTitle] = useState(''); // 선택한 뉴스 제목
    const [selectNewsContext, setSelectNewsContext] = useState(''); // 선택한 뉴스 본문
    const [clickNews, setClickNews] = useState(null); // 클릭한 뉴스 index번호


    const searchKeyword = () => {
        getKeywordResult(keyword).then(res => {
                //    TODO: 키워드 API 요청 후 코드 작성
            }
        )
            .catch(err => console.error(err));
    };


    const newsListClick = (news, idx) => {
        setBtnDisabled(false);
        setClickNews(idx);
        setSelectNewsTitle(news[3]);
        setSelectNewsContext(news[4]);
    };

    const selectNewsBtnClick = () => {
        const refinedContext = selectNewsContext.split('.').join('\n\n'); // 본문 줄바꿈 추가하는 코드
        // TODO 뉴스 목록 클릭 후 부모창에 제목, 본문 전달
    };

    return (
        <div className='searchContainer'>
            <div className='title'>뉴스 선택</div>
            <p className='explain'>
                최근 2~3일 이내의 경제 분야의 뉴스를 샘플로 제공하고 있습니다.<br/>
                경제 분야의 키워드를 입력하시면 최신 뉴스를 확인하실 수 있습니다.
                <span style={{fontSize: '15px'}}> <br/>
                예) 건설, 베터리, 인공지능, 반도체 등</span>
            </p>

            <div className='searchArea'>
                <TextField
                    autoFocus
                    margin="dense"
                    id="keywordInput"
                    sx={{padding: '0', height:'60px', width: '314px', margin:'0 16px 0 0', border: 'none', '& fieldset': { border: 'none' },}}
                    type="text"
                    placeholder='경제 뉴스의 키워드를 입력해주세요.'
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            searchKeyword();
                        }
                    }}
                />
                <Button id='keywordSearchBtn' variant="outlined" onClick={searchKeyword}>검색</Button>
            </div>

            <div className="searchResultArea">
                <p  className='subtitle'>{resultAlert}</p>
                <br/>
                {
                    newsList.length > 0 ?
                        newsList && newsList.map((news, idx) => (
                            <div className={`newsItem ${idx === clickNews ? 'click' : ''}`}
                                 onClick={(e) => {newsListClick(news, idx);}}>
                                <p className='date'>{`${news[5].slice(2,4)}.${news[5].slice(4,6)}.${news[5].slice(-2)}`}</p>
                                <p className='headline'>{news[3]}</p>
                                <p className='url'>{news[6]}</p>
                            </div>
                        ))
                        :
                        <div className='emptyNewsItem'>키워드 입력 후 확인 버튼을 눌러주세요.</div>
                }
            </div>
            <Button id='selectNewsBtn' className={`${btnDisabled}`} variant="contained" onClick={selectNewsBtnClick} disabled={btnDisabled}>입력</Button>

        </div>

    )
};

export default Search;
