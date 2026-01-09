import KpiCards from "./KpiCards";
import RevenueChart from "./RevenueChart";
import BestSellingTable from "./BestSellingTable";
import SellingSourceChart from "./SellingSourceChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <KpiCards />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <RevenueChart />
        </div>
        <div className="col-span-4">
          <div className="h-72 rounded-xl bg-gray-900 border border-gray-800" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <BestSellingTable />
        </div>
        <div className="col-span-4">
          <SellingSourceChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;