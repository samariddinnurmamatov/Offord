import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./components/layouts";
import { NotFound } from "./components/notfound";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
