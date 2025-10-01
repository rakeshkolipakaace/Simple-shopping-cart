import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Post from "./Components/Post";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
