import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import SubFooter from './components/subFooter/SubFooter';
import Main from './components/main/Main';
import Zerointerest from './components/zerointerest/Zerointerest';
// // import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// // register Swiper custom elements
// register();

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Zerointerest/>
      <SubFooter/>
      <Footer/>
    </div>
  );
}

export default App;
