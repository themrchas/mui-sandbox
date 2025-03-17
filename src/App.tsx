import { Typography } from '@mui/material';
import './App.css';
import './components/MuiTypeography'
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiTypography } from './components/MuiTypeography';
import { MuiButton } from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiBox } from './components/MuiBox';
import { MuiStack } from './components/MuiStack';
import { MuiGrid } from './components/MuiGrid';

function App() {
  return (
    <div className="App">
{/* <MuiRadioButton />
      <MuiTypography></MuiTypography>
      <MuiButton></MuiButton>
    */}

    {/* <MuiCheckbox /> */}
    {/* <MuiAutocomplete /> */}
   {/* <MuiBox /> */}
  {/*   <MuiStack />  */}
  <MuiGrid></MuiGrid>
      
    </div>
  );
}

export default App;
