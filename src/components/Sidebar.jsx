import {
  LayoutDashboard,
  Users,
  User,
  Package,
  ShoppingCart,
  BadgeQuestionMark,
  Bolt,
  BarChart3,
  Moon,
  Sun,
  DollarSign,
  Megaphone,
  Activity,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Employees", icon: Users },
  { label: "Customer", icon: User },
  { label: "Product", icon: Package },
  { label: "Order", icon: ShoppingCart },
  { label: "Analytics", icon: BarChart3 },
  { label: "Transactions", icon: DollarSign },
  { label: "Campaigns", icon: Megaphone, badge: "NEW" },
  { label: "Log Activity", icon: Activity },
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-[rgb(var(--components-bg))] text-white px-4 py-6">
      <h2 className="flex justify-center items-center text-2xl font-semibold mb-4">
        OpsPilot
      </h2>

      <nav className="space-y-1">
        {menu.map(({ label, icon: Icon, badge }) => (
          <div
            key={label}
            className="flex items-center cursor-pointer rounded-md bg-[rgb(var(--components-bg))] hover:bg-[rgb(var(--button-bg))] px-4 py-3 gap-2 transition-all ease-out duration-200"
          >
            <Icon className="w-5 h-5" />
            <span className="flex-1">{label}</span>

            {badge && (
              <span className="text-xs bg-purple-600 px-2 py-0.5 rounded">
                {badge}
              </span>
            )}

            {/* We can also use this approach for badges
        {badge ? (
          <span className="text-xs bg-purple-600 px-2 py-0.5 rounded">
            {badge}
          </span>
        ) : null}
        */}

          </div>
        ))}
      </nav>

      <nav className="flex flex-col gap-2 mt-4">
        <button className="text-gray-400 px-4 py-3 items-center flex hover:text-white cursor-pointer hover:scale-102 transition-all ease-out duration-200">
          <BadgeQuestionMark className="w-5 h-5 inline-block mr-2" />
          Help Center
        </button>
        <button className="text-gray-400 px-4 pb-3 items-center flex hover:text-white cursor-pointer hover:scale-102 transition-all ease-out duration-200">
          <Bolt  className="w-5 h-5 inline-block mr-2" />
          Settings
        </button>
      </nav>

        {/* Light/Dark Mode toggle */}
      <div className="bg-gray-700 w-full h-5 mt-6 rounded-full flex items-center justify-center gap-5 text-white py-5 ">
        <button className="flex gap-2 cursor-pointer">
         <Sun /> Light
        </button>
        <button className="flex gap-2 cursor-pointer">
          <Moon /> Dark
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
