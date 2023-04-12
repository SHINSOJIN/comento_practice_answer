import {useState} from 'react';
import NewsInsert from "./NewsInsert";
import Result from "./Result";
import {getResult} from '../../apis/stock_api'

//https://charts.ant.design/en/examples/pie/basic#basic
const Demo = () => {
    const [loading, setLoading] = useState(false); // 로딩스피너
    const [keywordIdx, setKeywordIdx] = useState(0); //뉴스 키워드 인덱스
    const [result, setResult] = useState({}); // 종목명 API 리턴값 저장
    const [stockList, setStockList] = useState([]) // 추출된 전체 종목명 배열


    const analysisClick = (e) => {
        e.preventDefault()
        setLoading(true)

        getResult(keywordIdx)
            .then(res => {
                const list = res.answer.sort((x, y) => y.score - x.score).map(el => el.stock)
                setResult(res)
                setStockList(list)
            })
            .catch(err => console.error(err))
    };


    return (
        <>
            <div style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                <div className="demoContainer ">
                    <NewsInsert keywordIdx={keywordIdx} setKeywordIdx={setKeywordIdx} analysisClick={analysisClick}/>
                    <Result result={result} stockList={stockList} loading={loading}/>
                </div>
            </div>
        </>
    );
};

export default Demo;
