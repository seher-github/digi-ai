import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Common/footer/Footer';
import Header from './Components/Common/header/Header';
import Home from './Components/home/Home';
import AiRec from './Components/services/Features/aiRec/AiRec';

function App() {
  return (
    <div>
      <Header />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      { /* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />*/}
        <Route path="/airecommendations" element={<AiRec />} />
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}

export default App;
