//import logo from './logo.svg';
import './App.css';
import Add from './Component/Add';
import Editupdate from './Component/Editupdate';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/getidupdate/:id" element={<Editupdate />} />

      </Routes>
      
      </BrowserRouter>
   

<h1>Hello</h1>
    </div>
  );
}

export default App;
