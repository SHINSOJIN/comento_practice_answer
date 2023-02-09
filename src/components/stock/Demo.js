import {useState, useEffect} from 'react';
import axios from 'axios'
import NewsInsert from "./NewsInsert";
import Result from "./Result";
import sampleNews  from "../../assets/datas/sampleNews";

//https://charts.ant.design/en/examples/pie/basic#basic
const Demo = () => {
    const [loading, setLoading] = useState(false); // 로딩스피너
    const [keywordIdx, setKeywordIdx] = useState(0); //뉴스 키워드 인덱스
    const [result, setResult] = useState({}); // 종목명 API 리턴값 저장
    const [stockList, setStockList] = useState([]) // 추출된 전체 종목명 배열


    const analysisClick = (e) => {
        e.preventDefault()
        setLoading(true)

        const url = 'https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io'
        axios.get(`${url}/stock/news?idx=${keywordIdx}`)
            .then(res => {
                const list = res.data.answer.sort((x, y) => y.score - x.score).map(el => el.stock)
                setResult(res.data)
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
