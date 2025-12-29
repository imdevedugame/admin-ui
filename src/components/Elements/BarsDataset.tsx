import { BarChart } from '@mui/x-charts/BarChart';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const chartSetting = {
  height: 300,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      width: 50,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
};

type BarsDatasetProps = {
    dataset: {
        dataKey: string;
        series: any[];
        data: any[];
    }
}

export default function BarsDataset(props: BarsDatasetProps) {
  const { dataset } = props;
  const { theme } = useContext(ThemeContext);

  const series = dataset.series.map((s) =>
    s.dataKey === 'amountLastWeek' ? { ...s, color: theme.color } : s
  );

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey, scaleType: 'band', categoryGapRatio: 0.5 }]}
      series={series}
      {...chartSetting}
    />
  );
}