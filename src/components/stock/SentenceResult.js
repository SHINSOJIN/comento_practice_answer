const SentenceResult = ({ sentenceResult }) => {
  const BackGroundColor = [
    "rgba(101, 119, 152, 0.15)",
    "rgba(98, 218, 171, 0.15)",
    "rgba(99, 149, 249, 0.15)",
    "rgb(245, 245, 245)",
  ];
  const Color = [
    "rgb(101, 119, 152)",
    "rgb(98, 218, 171)",
    "rgb(99, 149, 249)",
  ];
  return (
    <>
      {sentenceResult.map((sentence) => (
        <div
          key={sentence.index}
          className='sentenceReport2'
          style={{
            backgroundColor:
              BackGroundColor[
                Math.floor(Math.random() * BackGroundColor.length)
              ],
          }}
        >
          <p className='sentence'>{sentence.sentence}</p>
          <p className='percent'>
            {sentence.condition.map((el) => el.stock)[0] ? (
              <span>
                {sentence.condition.map((el) => el.stock)[0]}&nbsp;&nbsp;
              </span>
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
              {sentence.condition.map((el) =>
                Math.floor(el.score.toFixed(2) * 100)
              )[0] ? (
                <>
                  {
                    sentence.condition.map((el) =>
                      Math.floor(el.score.toFixed(2) * 100)
                    )[0]
                  }
                  %
                </>
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
