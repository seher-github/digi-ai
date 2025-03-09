import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Common/footer/Footer';
import Header from './Components/Common/header/Header';
import Home from './Components/home/Home';
import AiRec from './Components/services/Features/aiRec/AiRec';
import Services from './Components/services/page/Services';

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
      { /* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />*/}
        <Route path="services" element={<Services />} />
        <Route path="/airecommendations" element={<AiRec />} />
      </Routes>
   
      <Footer />
    </div>
  );
}

export default App;
