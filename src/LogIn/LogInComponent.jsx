import { useNavigate } from "react-router-dom";
function LogInComponent() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full max-w-xs mx-auto my-40 p-5 border border-gray-300 rounded-lg bg-white shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4 text-center">Log In</h2>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="email"
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-[#3bc6b4] text-white p-2 rounded cursor-pointer"
        >
          Log In
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <a
          onClick={goToSignUp}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}
export default LogInComponent;
