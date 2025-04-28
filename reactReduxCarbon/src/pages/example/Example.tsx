import { Button, Stack } from "@carbon/react";
import {
  barChartOptions,
  linearChartOptions,
} from "../../assets/mock/charts-data";
import ChartComponent from "../../shared/components/chartComponent/ChartComponent";
import ThemeSwitcher from "../../shared/components/themeSwitcher/ThemeSwitcherP";
import "./Exampe.scss";
import { Add } from "@carbon/icons-react";
import SearchFilter from "../../shared/components/searchFilter/SearchFilter";
import Table from "../../shared/components/table/Table";
function Example(): any {
  return (
    <>
      <div className="example">
        <h1>Example Page</h1>
        {/* <ThemeSwitcher theme={theme} onChange={handleThemeChange} /> */}
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
      </div>
    </>
  );
}
export default Example;
