import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
