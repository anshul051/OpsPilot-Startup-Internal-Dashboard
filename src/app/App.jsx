import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default App;
