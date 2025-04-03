import { Button, Stack } from '@carbon/react';
import './App.scss'
import SearchFilter from './components/SearchFilter/searchFilter';
import Table from './components/Table/table';
import { Add } from '@carbon/icons-react';


function App() {

  return (
    <>
      <div>
      <Stack gap={7}>
      <Button>Click Me1</Button>
      <Button renderIcon={Add}>Click Me2</Button>
      </Stack>
        <SearchFilter />
        <Table />
      </div>
    </>
  )
}

export default App;
