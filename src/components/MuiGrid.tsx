import { Box, Typography  } from "@mui/material"
import { useState } from '@mui/material'
import { grey, lightBlue, lightGreen, red } from "@mui/material/colors";
import  Grid  from '@mui/material/Grid2'

export const MuiGrid = () => {

    function WindowSize() {
        // State to hold window width and height
        const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      


    
      return (
          <>

              <Typography m={2}>Basic example of using Grid for layoyout grid (not data grid). Recall Grid uses as 12 column layout.</Typography>
              <Grid container spacing={2}>
                  <Grid size={{xs:4, md:6}}>
                      <Box bgcolor='red'>size=xs:4, md:6</Box>
                  </Grid>
                  <Grid size={{xs:4, md:6}}>
                      <Box bgcolor='grey'>size=xs:4, md:6</Box>
                  </Grid>
                  <Grid size={{md:5, lg:6}}>
                      <Box bgcolor='lightGreen'>md:5, lg:6</Box>
                  </Grid>
                  <Grid size={{md:4, lg: 6}}>
                      <Box bgcolor='lightBlue'>md:4, lg: 6</Box>
                  </Grid>
              </Grid>

      </>

      )
    

}