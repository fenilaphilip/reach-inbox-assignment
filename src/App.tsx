import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/LoginPage";
import Onebox from "./pages/Onebox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
