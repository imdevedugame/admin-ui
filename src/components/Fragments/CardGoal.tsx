
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CompositionExample from "../Elements/CompositionExample";
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

type Goal = {
  target_amount: number;
  present_amount: number;
};

type Props = {
  data: Goal;
};

function CardGoal({ data }: Props) {
  const { theme } = useContext(ThemeContext);
  // Check if data is empty
  const isDataEmpty = Object.keys(data).length === 0;
  
  if (isDataEmpty) {
    return (
      <Card title="Goals">
        <div className="p-4">
          <div className="flex flex-col justify-center items-center h-full py-16" style={{ color: theme.color }}>
            <CircularProgress color="inherit" size={50} />
            <div className="mt-4">Loading Data</div>
          </div>
        </div>
      </Card>
    );
  }
  
  const chartValue = (data.present_amount / data.target_amount) * 100;
  
  const chartData = (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center mb-6 text-gray-400">
          <Icon.Award />
          <div className="ml-2">
            <div className="text-sm">Target Achieved</div>
            <div className="font-bold text-2xl text-black">${data.present_amount.toLocaleString()}</div>
          </div>
        </div>
        <div className="flex items-center text-gray-400">
          <Icon.Target />
          <div className="ml-2">
            <div className="text-sm">This month Target</div>
            <div className="font-bold text-2xl text-black">${data.target_amount.toLocaleString()}</div>
          </div>
        </div>
      </div>
      <div className="ml-4 text-center">
        <CompositionExample data={chartValue} />
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>$0</span>
          <span className="font-bold text-2xl text-black">12K</span>
          <span>$20K</span>
        </div>
        <div className="mt-2 text-base font-medium text-gray-700">Target vs Achievement</div>
      </div>
    </div>
  );
  
  return (
    <Card title="Goals">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-3">${data.target_amount.toLocaleString()}</span>
            <div className="p-2 bg-gray-100 text-gray-400 rounded-md ml-1">
              <Icon.Edit size={18} />
            </div>
          </div>
          <div className="text-base text-gray-500">May, 2023</div>
        </div>
        <div className="border-b border-gray-300 my-3"></div>
        {chartData}
      </div>
    </Card>
  );
}

export default CardGoal;
