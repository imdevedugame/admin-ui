import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import RecentTransaction from "../components/Fragments/RecentTransaction";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import Icon from "../components/Elements/Icon";
import { balances, expensesStatistics, transactions, bills } from "../data";
import { useContext, useEffect, useState } from "react";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [goals, setGoals] = useState<any>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      console.log("Fetching goals...");
      const data = await goalService();
      console.log("Goals data received:", data);
      setGoals(data);
    } catch (err: any) {
      console.error("Gagal mengambil data goals:", err);
      setSnackbar({ open: true, message: err.msg || "Gagal mengambil data goals", severity: "error" });
      if (err.status === 401) {
        console.log("Token tidak valid, logout...");
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);
 
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
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1: Balance, Goals, Upcoming Bills */}
        <div className="w-full">
          <CardBalance data={balances} />
        </div>
        <div className="w-full">
          <CardGoal data={goals} />
        </div>
        <div className="w-full">
          <CardUpcomingBill data={bills} />
        </div>

        {/* Row 2: Recent Transaction & Statistics/Expense */}
        <div className="w-full lg:col-span-1">
          <RecentTransaction data={[...transactions]} />
        </div>
        <div className="w-full md:col-span-1 lg:col-span-2 flex flex-col gap-6">
          <CardStatistic data={expensesStatistics} />
          <CardExpenseBreakdown data={expenseData} />
        </div>
      </div>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}