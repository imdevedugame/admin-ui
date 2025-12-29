
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

type StatisticData = {
  id: number;
  date: string;
  amountThisWeek: number;
  amountLastWeek: number;
};

type Statistic = {
  dataKey: string;
  series: any[];
  data: StatisticData[];
};

type Props = {
  data: Statistic;
};

function CardStatistic({ data }: Props) {
  return (
    <Card title="Statistics">
      <>
        <select className="font-bold text-2xl ">
          <option>Weekly Comparison</option>
        </select>
        <BarsDataset dataset={data} />
      </>
    </Card>
  );
}

export default CardStatistic;
