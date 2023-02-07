import React from "react";
import { ReactComponent as Spinner } from "./SpinnerSvg.svg";

const LoadingSpinner = () => {
  return (
    <>
      <div>잠시만 기다려 주세요.</div>
      <Spinner />
    </>
  );
};

export default LoadingSpinner;
