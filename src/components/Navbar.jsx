import { Search, MessageCircle, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 w-screen bg-gray-900 flex items-center">
      {/* Navbar content goes here */}

      <div className="h-10 w-1/3 bg-gray-600 flex items-center justify-center ml-7 text-sm rounded-md px-3">
        <Search className="h-5 w-5 text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none text-white placeholder-gray-400 ml-2 w-full"
        />
      </div>

      <div className="ml-auto flex items-center gap-3 justify-center">
        <MessageCircle className="h-9 w-9 p-2 text-gray-300 hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-md bg-gray-700" />
        <Bell className="h-9 w-9 p-2 text-gray-300 hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-md bg-gray-700" />

        <div className="bg-gray-600 h-9 w-0.5"></div>

        <div className="flex mr-5 items-center gap-3">
          <img
            className="rounded-full border-none h-9 w-9"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-white">Anshul Kumar Arya</h2>
            <h3 className="text-sm text-gray-500">React Developer</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
