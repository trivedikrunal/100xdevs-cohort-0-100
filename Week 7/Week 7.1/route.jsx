import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Deshboard = lazy(() => import("./components/Deshboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/deshboard" element={<Deshboard />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

function Navigation() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/deshboard")}>Deshboard Page</button>
    </div>
  );
}

export default App;
