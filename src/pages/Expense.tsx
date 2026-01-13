import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import CardExpense from "../components/Elements/CardExpense";
import { CircularProgress } from "@mui/material";
import { ThemeContext } from "../context/themeContext";

export default function Expense() {
  const { logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      console.log("Fetching expenses...");
      const data = await expensesService();
      console.log("Expenses data received:", data);
      setExpenses(data);
    } catch (err: any) {
      console.error("Gagal mengambil data expenses:", err);
      setSnackbar({ 
        open: true, 
        message: err.msg || "Gagal mengambil data expenses", 
        severity: "error" 
      });
      if (err.status === 401) {
        console.log("Token tidak valid, logout...");
        logout();
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Expenses Comparison</h1>
      </div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-96" style={{ color: theme.color }}>
          <CircularProgress color="inherit" size={50} />
          <div className="mt-4 text-gray-600">Loading Data</div>
        </div>
      ) : (
        <>
          {expenses.length === 0 ? (
            <div className="text-center text-gray-500 py-20">
              <div className="text-lg">No expenses data found</div>
              <div className="text-sm mt-2">Total items: {expenses.length}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expenses.map((expense, index) => (
                <CardExpense
                  key={index}
                  category={expense.category}
                  amount={expense.amount}
                  percentage={expense.percentage}
                  trend={expense.trend}
                  items={expense.detail}
                />
              ))}
            </div>
          )}
        </>
      )}

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}
