export const barChartOptions: echarts.EChartsOption = {
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
    trigger: "axis", // Show tooltip on axis hover
  },
  toolbox: {
    feature: {
      saveAsImage: {}, // Add save as image button
    },
  },
};

export const linearChartOptions: echarts.EChartsOption = {
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
      type: "line", // Use 'line' for a linear chart
      smooth: true, // Optional: smooth the line
      areaStyle: {}, // Optional: Add area under the line
    },
  ],
  tooltip: {
    trigger: "axis", // Show tooltip on axis hover
  },
  toolbox: {
    feature: {
      saveAsImage: {}, // Add save as image button
    },
  },
};