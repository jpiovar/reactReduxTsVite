import './App.scss'
import SearchFilter from './components/SearchFilter/searchFilter';
import Table from './components/Table/table';
import { Button } from 'carbon-components-react';


function App() {

  return (
    <>
      <div>
      <Button>Click Me</Button>
        <SearchFilter />
        <Table />
      </div>
    </>
  )
}

export default App;
