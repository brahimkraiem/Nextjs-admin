import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transaction/transaction";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex flex-3 gap-5 flex-col">
        <div className="flex justify-between ">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};
export default Dashboard;
