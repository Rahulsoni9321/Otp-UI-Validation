import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Phoneotplogin from "./Components/Phoneotplogin";
import Nothing from "./Components/Nothing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Phoneotplogin></Phoneotplogin>}></Route>
          <Route path="/nothing" element={<Nothing></Nothing>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
