import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Valentine1 from "./pages/valentine1";
import Photos from "./pages/photos";
import CollagePage from "./pages/CollagePage";
import EnvelopePage from "./pages/EnvelopePage";

// Temporary placeholders (we’ll replace later)
const Page2 = () => (
  <div style={{ textAlign: "center", marginTop: "40vh" }}>
    <h1>You chose YES 💖</h1>
  </div>
);

const Page3 = () => (
  <div style={{ textAlign: "center", marginTop: "40vh" }}>
    <h1>I still choose you ❤️</h1>
  </div>
);

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
