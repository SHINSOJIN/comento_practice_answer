const SentenceResult = ({ sentenceResult, stockList }) => {
  // const companyResult = sentenceResult.length
  //   ? sentenceResult.map((el) => el.condition[0])
  //   : null;

  // console.log(companyResult);

  const Color = [
    "rgb(101, 119, 152)",
    "rgb(98, 218, 171)",
    "rgb(99, 149, 249)",
  ];

  const setBackGroundColorFn = (stockName) => {
    const BackGroundColor = [
      "rgba(101, 119, 152, 0.15)",
      "rgba(98, 218, 171, 0.15)",
      "rgba(99, 149, 249, 0.15)",
    ];
    if (stockName === undefined) {
      return "rgb(245, 245, 245)";
    }
    const index = stockList.indexOf(stockName.stock);

    return BackGroundColor[index];
  };

  return (
    <>
      {sentenceResult.map((sentence) => (
        <div
          key={sentence.index}
          className='sentenceReport2'
          style={{
            backgroundColor: setBackGroundColorFn(sentence.condition[0]),
            // BackGroundColor[
            //   Math.floor(Math.random() * BackGroundColor.length)
            // ],
          }}
        >
          <p className='sentence'>{sentence.sentence}</p>
          <p className='percent'>
            {sentence.condition[0] ? (
              <span>{sentence.condition[0].stock}&nbsp;&nbsp;</span>
            ) : (
              <span>없음&nbsp;&nbsp;</span>
            )}
            <span
              style={{
                color: Color[Math.floor(Math.random() * Color.length)],
                fontWeight: "bold",
                opacity: "1",
              }}
            >
              {sentence.condition[0] ? (
                <>{sentence.condition[0].score.toFixed(2) * 100}%</>
              ) : (
                <></>
              )}
            </span>
          </p>
        </div>
      ))}
    </>
  );
};

export default SentenceResult;
