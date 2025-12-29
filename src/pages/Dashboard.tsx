import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import RecentTransaction from "../components/Fragments/RecentTransaction";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import Icon from "../components/Elements/Icon";
import { balances, goals, expensesStatistics, transactions, bills } from "../data";


export default function Dashboard() {
  // Data dummy untuk Expenses Breakdown
  const expenseData = [
    {
      id: 1,
      category: "Housing",
      amount: 250,
      percentage: 15,
      icon: <Icon.Balance />,
      arrow: <Icon.ArrowUp />,
    },
    {
      id: 2,
      category: "Food",
      amount: 350,
      percentage: 8,
      icon: <Icon.Expense />,
      arrow: <Icon.ArrowDown />,
    },
    {
      id: 3,
      category: "Transportation",
      amount: 50,
      percentage: 12,
      icon: <Icon.Bill />,
      arrow: <Icon.ArrowDown />,
    },
    {
      id: 4,
      category: "Entertainment",
      amount: 80,
      percentage: 15,
      icon: <Icon.Goal />,
      arrow: <Icon.ArrowUp />,
    },
    {
      id: 5,
      category: "Shopping",
      amount: 420,
      percentage: 25,
      icon: <Icon.Transaction />,
      arrow: <Icon.ArrowUp />,
    },
    {
      id: 6,
      category: "Others",
      amount: 650,
      percentage: 23,
      icon: <Icon.Setting />,
      arrow: <Icon.ArrowUp />,
    },
  ];
return (
    <MainLayout>
      {/* Gunakan gap yang konsisten dan pastikan span kolom cukup untuk konten */}
      <div className="grid sm:grid-cols-12 gap-6">
        
        {/* Baris Pertama */}
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>
        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>
        {/* Berikan span lebih besar (5) agar Upcoming Bill tidak terhimpit */}
        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* Baris Kedua dan seterusnya */}
        <div className="sm:col-span-4">
          <RecentTransaction data={[...transactions]} />
        </div>
        <div className="sm:col-span-8 flex flex-col gap-6">
          <CardStatistic data={expensesStatistics} />
          <CardExpenseBreakdown data={expenseData} />
        </div>
        
      </div>
    </MainLayout>
  );
}