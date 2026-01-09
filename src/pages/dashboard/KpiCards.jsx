import {
  BadgeCent,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  CircleEllipsis,
  MoveRight,
} from "lucide-react";

const KpiCards = () => {
  const stats = [
    {
      icon: BadgeCent,
      label: "Total Sales",
      value: "$210,578",
      change: "+12%",
      positive: true,
      des: "Average of Total Sales",
    },
    {
      icon: ShoppingCart,
      label: "Total Orders",
      value: "1245",
      change: "-5%",
      positive: false,
      des: "Average of Total Orders",
    },
    {
      icon: TrendingUp,
      label: "Conversion Rate",
      value: "8.5%",
      change: "+3%",
      positive: true,
      des: "Average of Conversion Rate",
    },
    {
      icon: DollarSign,
      label: "Avg Order Value",
      value: "$150.40",
      change: "+8%",
      positive: true,
      des: "Average of Order Value",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-xl bg-gray-900 border border-gray-800 p-5 flex flex-col justify-between"
        >
          <div className="flex gap-4 mb-3 items-center">
            <stat.icon className="w-6 h-6 text-gray-400" />
            <p className="text-sm text-gray-400">{stat.label}</p>
            <CircleEllipsis className="w-6 h-6 text-gray-400 ml-auto hover:text-white cursor-pointer transition-all ease-in-out duration-200" />
          </div>

          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-white">{stat.value}</h2>

            <span
              className={`text-sm font-medium ${
                stat.positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-gray-500">{stat.des}</p>
            <MoveRight className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all ease-in-out duration-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
