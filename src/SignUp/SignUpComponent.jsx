import { useNavigate } from "react-router-dom";
function SignUpComponent() {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="w-full max-w-xs mx-auto my-40 p-5 border border-gray-300 rounded-lg bg-white shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4 text-center">Sign Up</h2>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-[#3bc6b4] text-white p-2 rounded cursor-pointer"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <a
          onClick={goToLogIn}
          href="/login"
          className="text-blue-500 hover:underline"
        >
          Log In
        </a>
      </p>{" "}
    </div>
  );
}
export default SignUpComponent;
