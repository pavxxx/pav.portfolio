import { useEffect } from "react";
import Home from "./pages/Home";
import { initCursor } from "./utils/cursor";

function App() {
  useEffect(() => {
    initCursor();
  }, []);

  return <Home />;
}

export default App;
