import { Box, Stack, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@mui/material';
import { useState } from 'react';
import { grey } from '@mui/material/colors';


export const MuiStack = () => {

    const [buttonSelected, setButtonSelected] = useState<string>("cat");

    enum stackDirection {

        COLUMN = "column",
        ROW = "row",
        ROW_REVERSE = "row-reverse",
        COLUMN_REVERSE = "row-reverse"

    }

    const handleButtonChangeRadioGroup = (event: React.ChangeEvent<HTMLInputElement>) {

    } //handleButtonChangeRadioGroup

    return (
    
        <>

<Box>
        
        <FormControl>
          
            <FormLabel id='form-label-id-1'>
                FormLabel goes here
            </FormLabel>
            <RadioGroup 
                onChange={handleButtonChangeRadioGroup}
                value={buttonSelected}
                row //this is a property that is inherited from FormGroup -> chck out docs                    
            >
                <FormControlLabel value={stackDirection. control={<Radio />} label="Dog" />
                <FormControlLabel value="cat" control={<Radio />} label="Cat" />
                <FormControlLabel value="bird" control={<Radio />} label="Bird" />

            </RadioGroup>
            
        </FormControl>
        
        <Typography>Current value chosen is {buttonSelected}</Typography>

  </Box>

        <Stack>
        
            <Box sx={{
                width: 75,
                height: '80%',
                bgcolor: 'warning.main'

            }} />

            <Box sx={{
                width: 75,
                height: '80%',
                bgcolor: 'success.main'

            }} />
             <Box sx={{
                width: 75,
                height: '80%',
                bgcolor: 'info.light'

            }} />

        </Stack>
      
        </>

    )


}