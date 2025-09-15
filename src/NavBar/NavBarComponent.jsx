import todolistlogo from "./Images/To-Do-List-.webp";
function NavBarComponent() {
  return (
    <div>
      <div className="w-full  bg-[#3bc6b4] p-2 shadow-md flex flex-row items-start justify-start h-18 ">
        <img
          src={todolistlogo}
          alt="To-Do List Logo"
          className="w-12 h-12 mx-auto mb-2 rounded-full object-cover ml-4 my-2"
        />
        <h1 className="text-white text-3xl font-bold ml-4 mt-2">
          To-Do-List-Application
        </h1>
        <button className="ml-auto bg-white text-[#3bc6b4] font-semibold px-3 py-1 rounded hover:bg-gray-200 cursor-pointer my-2">
          LogIn
        </button>
        <button className="ml-4 bg-white text-[#3bc6b4] font-semibold px-3 py-1 rounded hover:bg-gray-200 cursor-pointer my-2">
          SignUp
        </button>
      </div>
    </div>
  );
}
export default NavBarComponent;
