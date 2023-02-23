import { Route, Routes } from "react-router-dom";
import AuthRouter from "./auth/AuthRouter";

export default function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </main>
  );
}
