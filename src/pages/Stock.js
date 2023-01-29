import Intro from '../components/stock/Intro';
import Demo from '../components/stock/Demo';
import EngineDescription from '../components/stock/EngineDescription';


const Stock = () => {
    return (
        <div className="container">
            <Intro/>
            <Demo />
            <EngineDescription/>
        </div>);
};

export default Stock;