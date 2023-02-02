import sentence from "../common/sentenceList.js";

const SentenceResult = () => {
  return (
    <>
      {sentence.map((sent, index) => (
        <div
          key={index}
          className="sentenceReport2"
          style={{ backgroundColor: `rgba(${sent.color}, 0.15)` }}
        >
          <p className="sentence">{sent.sentence}</p>
          <p className="percent">
            {sent.condition.length ? (
              <>
                <span>{sent.condition[0].stock}&nbsp;&nbsp;&nbsp;</span>
                <span
                  style={{
                    color: `rgb(${sent.color})`,
                    fontWeight: "bold",
                    opacity: "1",
                  }}
                >
                  {sent.condition[0].score.toFixed(2) * 100}%
                </span>
              </>
            ) : (
              <span>없음</span>
            )}
          </p>
        </div>
      ))}
    </>
  );
};

export default SentenceResult;
