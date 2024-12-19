import Navbar from './Navbar';
import Homepage from './Homepage';
import Shop from './Shop';
import About from './About';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
      </Routes>
  </>
  );
}

export default App;
