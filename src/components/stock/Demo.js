import NewsInsert from "./NewsInsert";
import Result from "./Result";

//https://charts.ant.design/en/examples/pie/basic#basic
const Demo = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className='demoContainer'>
        <NewsInsert />
        <Result />
      </div>
    </div>
  );
};

export default Demo;
