import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Valentine1 from "./pages/Valentine1";
import Photos from "./pages/Photos";
import CollagePage from "./pages/CollagePage";
import EnvelopePage from "./pages/EnvelopePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Valentine1 />} />
        <Route path="/yes" element={<Photos />} />
        <Route path="/forever" element={<CollagePage />} />
        <Route path="/letter" element={<EnvelopePage />} />
      </Routes>
    </Router>
  );
}

export default App;
