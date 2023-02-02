import Button from "@mui/material/Button";

const NewsInsert = () => {
  return (
    <div class="inputArea inner">
      <div class="keywordBtnWrapper">
        <div class="keywordBtnList">
          <div></div>
          <span>
            <strong>샘플 뉴스</strong>
          </span>
          <span class="keywordBtn ">카카오</span>
          <span class="keywordBtn ">화장품</span>
          <span class="keywordBtn ">삼성</span>
          <span class="keywordBtn ">스마트폰</span>
        </div>
      </div>
      <div class="inputWrapper">
        <input
          aria-invalid="false"
          id="inputTitle"
          placeholder="뉴스 제목"
          type="text"
          value=""
        />
        <div>
          <textarea
            rows="12"
            aria-invalid="false"
            id="inputContext"
            placeholder="뉴스 본문"
            style={{ height: "276px" }}
          ></textarea>
          <textarea
            aria-hidden="true"
            readonly=""
            tabindex="-1"
            style={{
              visibility: "hidden",
              position: "absolute",
              overflow: "hidden",
              height: "0px",
              top: "0px",
              left: "0px",
              transform: "translateZ(0px)",
              padding: "0px",
              width: "1213.97px",
            }}
          ></textarea>
        </div>
      </div>
      <a href="result.html">
        <Button
          class="analysisBtn"
          tabindex="0"
          type="button"
          variant="contained"
        >
          추출하기
        </Button>
      </a>
    </div>
  );
};

export default NewsInsert;
