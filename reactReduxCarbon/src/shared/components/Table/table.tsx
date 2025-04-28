import { useEffect, useState } from 'react'
import './Table.scss'
import { useSelector } from 'react-redux';

interface Record {
  id: string;
  name: string;
  proteins: string;
  carbohydrates: string;
  fats: string;
}
function Table() {
  const tableReducer = useSelector((state: any) => state?.tableReducer);

  const [records, setRecords] = useState([]);

  useEffect(() => { 
    const tableData = tableReducer?.data || [];
    setRecords(tableData);
  }, [tableReducer]);

  return (
    <div className='table-raw'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Proteins</th>
            <th>Carbohydrates</th>
            <th>Fats</th>
          </tr>
        </thead>
        <tbody>
          {records?.map((record: Record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.proteins}</td>
              <td>{record.carbohydrates}</td>
              <td>{record.fats}</td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  )
}

export default Table;
