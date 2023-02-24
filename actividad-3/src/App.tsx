import { Link, Route, Routes } from "react-router-dom";
import AuthRouter from "./auth/AuthRouter";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </main>
  );
}

const Home = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-blue-200 text-3xl">
      You are in the home page!
      <Link to="auth/login">
        <p className="w-fit rounded-md border-2 border-slate-900 p-3 hover:bg-red-300">
          Go to Login
        </p>
      </Link>
    </div>
  );
};
