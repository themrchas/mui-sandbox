import { Typography } from '@mui/material';
import './App.css';
import './components/MuiTypeography'
import { MuiTypography } from './components/MuiTypeography';
import { MuiButton } from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiBox } from './components/MuiBox';

function App() {
  return (
    <div className="App">

   {/*   <MuiTypography></MuiTypography>
      <MuiButton></MuiButton>
    */}

    {/* <MuiCheckbox /> */}
    {/* <MuiAutocomplete /> */}
    <MuiBox />
      
    </div>
  );
}

export default App;
