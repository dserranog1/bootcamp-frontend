import { Route, Routes } from "react-router-dom";
import AuthRouter from "./auth/AuthRouter";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/*" element={<AuthRouter />} />
        <Route path="*" element={<NoMatch fallbackPageName="Home" />} />
      </Routes>
    </main>
  );
}
