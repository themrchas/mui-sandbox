import { Box, Typography } from '@mui/material'


export const MuiBox = () => {

    return (

        <>
        <Box sx={{textAlign:"left"}}>
            <Typography m={3}>The Box component is used like the HTML &lt;div&gt; tag</Typography>
            <Typography m={3} >System props are deprectated: In some cases, you can add style properties directly to a tag instead of using 'sx'
                <br/>
                Example:  You can use <span style={{color:"red"}}>Deprecated System Props- &lt;Typography m=&#123;3&#125;&gt;</span> as well as &lt;Typography sx=&#123;&#123;m:3&#125;&gt;
            </Typography>
        </Box>

        <Box sx={{my:2, textAlign:"left"}}>

            <Typography m={3}>Box has a <b>component</b> property that allows you to specicify the underlying HTML component Box uses.</Typography>   
            <Box component={'span'} >'span'</Box>
            <Box component={'div'}>'div'</Box>
            <Typography m={1}><b>select' component property<<b>/Typography> 
            <Box component={'select'} sx={{width:200, padding: 1}}>
                <option value="option1">Option 1 </option>
                <option value="option2">Option 2 </option>
                <option value="option3">Option 3 </option>
            </Box>



        </Box>
        
        
    
        </>




    )




}