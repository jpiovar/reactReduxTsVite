import { Button, Stack } from "@carbon/react";
import "./App.scss";
import SearchFilter from "./components/SearchFilter/searchFilter";
import Table from "./components/Table/table";
import { Add } from "@carbon/icons-react";
import * as echarts from "echarts";
import ChartComponent from "./components/ChartComponent/chartComponent";

function App() {
  const barChartOptions: echarts.EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
    tooltip: {
      trigger: 'axis', // Show tooltip on axis hover
    },
    toolbox: {
      feature: {
        saveAsImage: {}, // Add save as image button
      },
    },
  };

  const linearChartOptions: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line', // Use 'line' for a linear chart
        smooth: true, // Optional: smooth the line
        areaStyle: {}, // Optional: Add area under the line
      },
    ],
    tooltip: {
      trigger: 'axis', // Show tooltip on axis hover
    },
    toolbox: {
      feature: {
        saveAsImage: {}, // Add save as image button
      },
    },
  };


  return (
    <>
      <div>
        <div style={{ width: "800px", height: "1000px", margin: "auto" }}>
          <h1>ECharts in React TypeScript</h1>
          <ChartComponent options={barChartOptions} />
          <ChartComponent options={linearChartOptions} />
        </div>
        <Stack gap={7}>
          <Button>Click Me1</Button>
          <Button renderIcon={Add}>Click Me2</Button>
        </Stack>
        <SearchFilter />
        <Table />
      </div>
    </>
  );
}

export default App;
