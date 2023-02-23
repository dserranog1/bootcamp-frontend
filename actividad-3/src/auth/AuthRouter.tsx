import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;
