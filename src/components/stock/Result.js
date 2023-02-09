import {useState, useEffect} from 'react';
import { Pie } from '@ant-design/plots';

const Result = ({result, stockList, loading}) => {

    const [data, setData] = useState([])

    useEffect(()=> {
        if( !!Object.keys(result).length){
            setData(result.answer)
        }
    }, [result])

    const config = {
        appendPadding: 2,
        padding: -15,
        data,
        angleField: 'score',
        colorField: 'stock',
        radius: 0.8,
        legend: false,
        label: {
            type: 'outer',
            offset: '-30%',
            content: '{name} {value}%',
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {type: 'element-single-selected',},
        ],
    };


    const setColor = (stockname, a) => {
        //컬러 기준 G2plot 파이차트 기본 컬러 순서
        const palette = [
            `rgba(99,149,249,${a})`, `rgba(98,218,171,${a})`, `rgba(101,119,152,${a})`,  `rgba(246,192,34,${a})`,  `rgba(118,102,249,${a})`,
            `rgba(116,203,237,${a})`, `rgba(153,103,189,${a})`, `rgba(41,153,153,${a})`, `rgba(116,203,237,${a})`, `rgba(208,244,229,${a})`
        ]
        const idx = stockList.indexOf(stockname)

        if(stockname === '없음'){
            return `#f5f5f5`
        }

        return palette[idx]
    }

    return(
        <div style={{backgroundColor: 'rgb(247, 249, 251)'}}>
            <div className="resultArea inner">
                <div className="resultSection1"><p className="title">분석결과</p>
                    <div className="visualization">
                        {
                            !!data.length &&
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="chartExplain">
                                    <p className="subtitle result">Result</p>
                                    <p style={{marginTop: '24px', height: '19px', fontWeight: 'bold'}}>
                                        <span style={{marginTop: 0, fontSize: '30px', verticalAlign: 'sub', color: 'rgb(99, 149, 249)'}}> • </span>
                                        {result.answer[0].stock}
                                    </p>
                                    <p className="subtitle list">List</p>
                                    <p style={{margintop: '12px', height: '19px', fontweight: 'bold', color: 'rgb(99, 149, 249)'}}>
                                        <span style={{marginTop: 0, fontSize: '30px', verticalAlign: 'sub', color: 'rgb(99, 149, 249)'}}> • </span>
                                        {result.answer[0].stock} {Math.floor(result.answer[0].score*100)}%
                                    </p>
                                    <p style={{margintop: '12px', height: '19px', fontweight: 'bold', color: 'rgb(98, 218, 171)'}}>
                                        <span style={{marginTop: 0, fontSize: '30px', verticalAlign: 'sub', color: 'rgb(99, 149, 249)'}}> • </span>
                                        {result.answer[1].stock} {Math.floor(result.answer[1].score*100)}%
                                    </p>
                                </div>
                                <div className="chart">
                                    <Pie {...config}  style={{width: '300px', height: '300x', padding: 0}} />
                                </div>
                                <div className="detailExplain">
                                    <p className="subtitle result" style={{textAlign: 'left'}}>세부 분석결과</p>
                                    <div>
                                        <p style={{marginTop: 0, height: '19px', fontWeight: 'bold', width: '130px'}}>
                                            <span style={{marginTop: '-20px', fontSize: '30px', verticalAlign: 'sub', color: setColor(data[0].stock, 1)}}> • </span>
                                            {data[0].stock}
                                        </p>
                                        <p style={{width: '270px'}}>
                                            "Score": {data[0].score}<br/> "Logit": {data[0].logit}
                                        </p>
                                    </div>
                                    <div>
                                        <p style={{marginTop: 0, height: '19px', fontWeight: 'bold', width: '130px'}}>
                                            <span style={{marginTop: '-20px', fontSize: '30px', verticalAlign: 'sub', color: setColor(data[1].stock, 1)}}> • </span>
                                            {data[1].stock}
                                        </p>
                                        <p style={{width: '270px'}}>
                                            "Score": {result.answer[1].score}<br/> "Logit": {data[1].logit}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="resultSection2"><p className="title">Sentence 분석</p>
                    {
                        loading &&
                        <div className="visualization">
                            {
                               Object.keys(result).length && result.sentence.map((sent, idx)=>
                                    {
                                        return (
                                            <div key={idx} className="sentenceReport2" style={{backgroundColor: setColor(!!sent.condition.length ? sent.condition[0].stock : '없음', 0.1)}}>
                                                <p className="sentence">{sent.sentence}</p>
                                                <p className="percent" >
                                                    <span> {!!sent.condition.length ? sent.condition[0].stock : '없음'}&nbsp;&nbsp;&nbsp;</span>
                                                    <span style={{color: setColor(!!sent.condition.length ? sent.condition[0].stock : '없음', 1), fontWeight: 'bold', opacity: "1"}}>{!!sent.condition.length ? Math.floor(sent.condition[0].score*100) : 0}%</span>
                                                </p>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Result;