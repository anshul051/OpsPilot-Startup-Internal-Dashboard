import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default App;
