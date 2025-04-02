import { Box, Typography, Button } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material';


//This interface defines an property called 'fields' with property 'content'
export interface IGenericCardProps { 
    fields: {
        content: string;
    }
}

export const GenericCard = (props: IGenericCardProps) => {

        const { fields } = props;

    return (


    <Card sx={{m:3, boxShadow:8}}>
            <CardMedia 
                image="https://picsum.photos/200/200" 
                component="img"
                sx={{width:100, height:100}} />
            <CardContent>
                <Typography variant="h5"  gutterBottom component="div">{fields.content}</Typography>    
                <Typography variant="body2"  gutterBottom component="div" color="text.secondary">Nisi eu qui laboris ad veniam elit mollit commodo velit consectetur tempor. Ad ad sunt mollit tempor velit eiusmod veniam non culpa ex ex elit irure consectetur. Commodo excepteur ut cupidatat fugiat aute consectetur cillum sint id ex ad labore esse. Nostrud laboris aute eiusmod aliqua veniam ut in in excepteur magna nulla irure. Consectetur culpa laboris exercitation sit quis do est ut dolore exercitation cillum et.</Typography>   
            </CardContent>
            <CardActions>
                <Button variant="text" size="small">Add Card</Button>
                <Button variant="contained" size="small">Remove Card</Button>
            </CardActions>
        </Card>

    )

}