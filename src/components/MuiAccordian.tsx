import { Box, Typography } from "@mui/material"
import {  Accordion } from "@mui/material";
import { TypeFormatFlags } from "typescript";


export const MuiAccordian = () => {

    return (


    <Box sx={{width: 2/3, justifyContent:"left"}}>

        <Typography variant="h4">Example of using Accordian and associated components</Typography>
            <Typography variant="h5" component="div" align="left" >
              
              <ul>
                    <li >Accordion - the main wrapper</li>
                    <li>AccordionSummary - the 'title' of the Accordian</li>
                    <li>AccordionDetails - the 'contents' of the Accordian</li>
                </ul>
            </Typography>




    </Box>

    )


}