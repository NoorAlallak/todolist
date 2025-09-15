import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todolist from "./Todolist/Todolist";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

export default function App() {
  return (
    <div className="bg-[#f2f8f7] font-sans m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
