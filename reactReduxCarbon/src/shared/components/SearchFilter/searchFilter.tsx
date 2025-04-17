import { useEffect, useState } from 'react'
import './searchFilter.scss'
import { useDispatch } from 'react-redux';
import { TableLoadGet } from '../../../store/table/table.actions';
function SearchFilter() {
  const dispatch = useDispatch();
  const initialValues =  {    
    name: '',
    proteins: '',
    carbohydrates: '',
    fats: ''
  };
  const [values, setValues] = useState(initialValues);

  const resetFilterValues = (valuesPp: any) => {
    setValues((prevState) => {
      return {
        ...prevState,
        ...valuesPp
      }
    });
  }
  const executeSearch = (type: string, valuesPp: any) => {
    if (type ==='init') {
      resetFilterValues(valuesPp);
    }
    const url = import.meta.env.VITE_BE_ENDPOINT + '?name=' + valuesPp.name + '&proteins=' + valuesPp.proteins + '&carbohydrates=' + valuesPp.carbohydrates + '&fats=' + valuesPp.fats;
    dispatch(TableLoadGet(url));
  };

  useEffect(() => {
    executeSearch('init', initialValues);
  }, []);

  return (
    <div className='search-raw'>
      <span>Name:<br/><input type='text' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} /></span>
      <span>Proteins:<br/><input type='text' value={values.proteins} onChange={(e) => setValues({ ...values, proteins: e.target.value })} /></span>
      <span>Carbohydrates:<br/><input type='text' value={values.carbohydrates} onChange={(e) => setValues({ ...values, carbohydrates: e.target.value })} /></span>
      <span>Fats:<br/><input type='text' value={values.fats} onChange={(e) => setValues({ ...values, fats: e.target.value })} /></span>
      <span>
        <button onClick={() => executeSearch('search', values)}>Search</button>
        <button onClick={() => executeSearch('init', initialValues)}>X</button>
      </span>
    </div>
  )
}
export default SearchFilter;
