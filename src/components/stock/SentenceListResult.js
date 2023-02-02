import sentence from "../common/sentenceList.js";


const SentenceResult = () => {
  return (
    <>
      <div
        class="sentenceReport2"
        style={{ backgroundColor: "rgba(101, 119, 152, 0.15)" }}
      >
        <p class="sentence">{sentence[0].sentence}</p>
        <p class="percent">
          <span>{sentence[0].condition[0].stock}&nbsp;&nbsp;&nbsp;</span>
          <span
            style={{
              color: "rgb(101, 119, 152)",
              fontWeight: "bold",
              opacity: "1",
            }}
          >
            {sentence[0].condition[0].score.toFixed(2) * 100}%
          </span>
        </p>
      </div>
      <div
        class="sentenceReport2"
        style={{ backgroundColor: "rgba(98, 218, 171, 0.15)" }}
      >
        <p class="sentence">{sentence[1].sentence}</p>
        <p class="percent">
          <span>{sentence[1].condition[0].stock}&nbsp;&nbsp;&nbsp;</span>
          <span
            style={{
              color: "rgb(98, 218, 171)",
              fontWeight: "bold",
              opacity: "1",
            }}
          >
            {sentence[1].condition[0].score.toFixed(2) * 100}%
          </span>
        </p>
      </div>
      <div
        class="sentenceReport2"
        style={{ backgroundColor: "rgba(99, 149, 249, 0.15)" }}
      >
        <p class="sentence">{sentence[2].sentence}</p>
        <p class="percent">
          <span>{sentence[2].condition[0].stock}&nbsp;&nbsp;&nbsp;</span>
          <span
            style={{
              color: "rgb(99, 149, 249)",
              fontWeight: "bold",
              opacity: "1",
            }}
          >
            {sentence[2].condition[0].score.toFixed(2) * 100}%
          </span>
        </p>
      </div>
      <div
        class="sentenceReport2"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <p class="sentence">{sentence[3].sentence}</p>
        <p class="percent">
          <span>없음</span>
        </p>
      </div>
      <div
        class="sentenceReport2"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <p class="sentence">{sentence[4].sentence}</p>
        <p class="percent">
          <span>없음</span>
        </p>
      </div>
    </>
  );
};

export default SentenceResult;
