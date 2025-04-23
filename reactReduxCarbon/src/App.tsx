import { Button, Stack, Theme } from "@carbon/react";
import "./App.scss";
import SearchFilter from "./shared/components/SearchFilter/searchFilter";
import Table from "./shared/components/Table/table";
import { Add } from "@carbon/icons-react";
import ChartComponent from "./shared/components/ChartComponent/chartComponent";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./shared/components/ThemeSwitcher/themeSwitcher";
import Spinner from "./core/components/spinner/Spinner";
import { useDispatch } from "react-redux";
import { StartSpinner, StopSpinner } from "./store/spinner/spinner.actions";
import useGlobalDOMEvents from "./core/services/useGlobalDOMEvents";
import { barChartOptions, linearChartOptions } from "./assets/mock/charts-data";
import CustomHeader from "./core/components/customHeader/CustomHeader";

function App() {
  const [theme, setTheme] = useState<"white" | "g10" | "g90" | "g100">("g10");
  const dispatch = useDispatch();

  useGlobalDOMEvents({
    load(evt: any) {
      console.log({ evt });
    },
    change(evt: any) {
      console.log({ evt });
    },
    click(evt: any) {
      console.log({ evt });
    },
    keyup(evt: any) {
      console.log({ evt });
      // if (evt.key === 'Escape') {
      // }
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem("carbon-theme") as any;
    if (saved) setTheme(saved);

    dispatch(StartSpinner());
    setTimeout(() => {
      dispatch(StopSpinner());
    }, 2000);
  }, []);

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    localStorage.setItem("carbon-theme", newTheme);
  };

  return (
    <>
      <Theme theme={theme}>
        <Spinner />
        <div className="app">
          <CustomHeader />
          <div id="custom-body">
            <ThemeSwitcher theme={theme} onChange={handleThemeChange} />
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
        </div>
      </Theme>
    </>
  );
}

export default App;
