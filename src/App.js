import './assets/css.css'
import {Routes, Route} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Stock from './pages/Stock';
import Login from "./pages/Login";


function App() {
    return (
        <div id="background">
            <Header/>
            <Routes>
                <Route path='/' element={<Stock/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
            <Footer/>
        </div>
  );
}

export default App;
