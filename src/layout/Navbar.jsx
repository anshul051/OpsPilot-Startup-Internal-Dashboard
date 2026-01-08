import { Search, MessageCircle, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-gray-900 flex items-center px-4">
      <div className="h-10 w-1/3 bg-gray-700 flex items-center gap-2 text-sm rounded-md px-3 focus-within:ring-2 focus-within:ring-indigo-500">
        <Search className="h-4 w-4 text-gray-300" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <MessageCircle className="h-8 w-8 p-1.5 text-gray-300 hover:text-white rounded-md bg-gray-700 cursor-pointer" />
        <Bell className="h-8 w-8 p-1.5 text-gray-300 hover:text-white rounded-md bg-gray-700 cursor-pointer" />

        <div className="h-8 w-px bg-gray-600 mx-2" />

        <div className="flex items-center gap-3">
          <img
            className="h-9 w-9 rounded-full"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="User avatar"
          />
          <div className="leading-tight">
            <p className="text-white text-sm">Anshul Kumar Arya</p>
            <p className="text-xs text-gray-400">React Developer</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
