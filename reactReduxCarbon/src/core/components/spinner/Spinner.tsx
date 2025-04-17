import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Spinner.scss';
import { SpinnerType } from '../../../store/spinner/spinner.types';
import { Loading } from '@carbon/react';

function Spinner(): any {
  const spinner = useSelector((state: { spinnerReducer: SpinnerType }) => state.spinnerReducer.isOn);

  const [spinnerLoader, setSpinnerLoader] = useState(false);
  
  useEffect(() => {
    setSpinnerLoader(spinner);
  }, [spinner]);

  return (
    <>
      <div id='spinner'>
        {spinnerLoader && <Loading className={'spinner-class'} withOverlay={true} />}
      </div>
    </>
  );
}

export default Spinner;
