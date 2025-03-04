import { Typography } from '@mui/material';
import './App.css';
import './components/MuiTypeography'
import { MuiTypography } from './components/MuiTypeography';
import { MuiButton } from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';

function App() {
  return (
    <div className="App">

   {/*   <MuiTypography></MuiTypography>
      <MuiButton></MuiButton>
    */}

    <MuiCheckbox />
      
    </div>
  );
}

export default App;
