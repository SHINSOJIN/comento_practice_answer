const SentenceResult = ({ sentenceResult, stockList }) => {
  const setBackGroundColorFn = (stockName, color) => {
    const BackGroundColor = [
      `rgba(101, 119, 152, ${color})`,
      `rgba(98, 218, 171, ${color})`,
      `rgba(99, 149, 249,  ${color})`,
      `rgba(327, 120, 345, ${color})`,
      `rgba(49, 320, 45, ${color})`,
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
            backgroundColor: setBackGroundColorFn(sentence.condition[0], 0.1),
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
                color: setBackGroundColorFn(sentence.condition[0], 1),
                fontWeight: "bold",
                opacity: "1",
              }}
            >
              {sentence.condition[0] ? (
                <>{Math.floor(sentence.condition[0].score * 100)}%</>
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
