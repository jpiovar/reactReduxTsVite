import { Theme } from "@carbon/react";
import "./App.scss";
import { useEffect, useState } from "react";
import Spinner from "./core/components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { StartSpinner, StopSpinner } from "./store/spinner/spinner.actions";
import useGlobalDOMEvents from "./core/services/useGlobalDOMEvents";
import CustomHeader from "./core/components/customHeader/CustomHeader";
import { Route, Routes } from "react-router-dom";
import Example from "./pages/example/Example";

function App() {
  const themes: any = { light: {label: 'Light theme', value: 'white'}, dark: {label: 'Dark theme', value: 'g100'}};
  const [theme, setTheme] = useState(themes.light.value);

  const dispatch = useDispatch();
  const themeReducer = useSelector((state: any) => state?.themeReducer);


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
    dispatch(StartSpinner());
    setTimeout(() => {
      dispatch(StopSpinner());
    }, 2000);
  }, []);

  useEffect(() => { 
    debugger;
    const themeData = themeReducer?.data;
    setTheme(themes[themeData]?.value);
  }, [themeReducer]);

  return (
    <>
      <Theme theme={theme}>
        <Spinner />
        <div className="app">
          <CustomHeader />
          <div id="custom-body">
            <Routes>
              <Route path="/example" element={<Example />} />
            </Routes>
          </div>
        </div>
      </Theme>
    </>
  );
}

export default App;
