import * as React from 'react';
import {Avatar,IconButton,Typography,TextField,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Rating,Button,Grid,styled,Paper,Card,CardContent,CardActions,CardHeader} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import img from './pocket-puppy.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#b026bf' : '#ffea8f',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Form()
{
    const [name,setName] = useState("");
    const [feedback,setFeedback] = useState("");
    const [gender,setGender] = useState("");
    const [rating,setRating] = useState("");

    const [data,setData] = useState([]);
    const [nos,setNos] = useState(1);
    const [id,setId] = useState("");
    const [flag,setFlag] = useState("false"); //false --> at initial stage 
    const submit = () => {
        if(flag==="false")
        {
            let newData = {id:nos,name,feedback,gender,rating};
            setData([...data,newData])
            setNos(nos+1)
        }
        else
        {
            let replaceData = data.filter(findData => findData.id !== id)
            let updateData = {id,name,feedback,gender,rating}
            setData([...replaceData,updateData])
        }
        setFlag("true") 
        setName("")
        setFeedback("")
        setGender("")
        setRating("")
    }
    const remove = (id) =>{
        let deleteData = data.filter(findData => findData.id !== id)
        setData(deleteData)
    } 
    const edit = (id) =>{
        let editData = data.filter(findData => findData.id === id)
        setName(editData[0].name)
        setFeedback(editData[0].feedback)
        setGender(editData[0].gender)
        setRating(editData[0].rating)
        setId(editData[0].id)
    }
    console.log(data)
    return(
        <div className="form">
            <Grid container spacing = {1} >
            <Grid item xs={6}>
            <Item>
            <FormControl sx={{width:"100%",height:"100%"}}>
            <br></br>
                <div>
                    <TextField sx={{width:"50",}} id="name" label="Name" value={name} variant="outlined" onChange={(n) => setName(n.target.value)}/>
                </div><br></br>
                <div>
                    <TextField sx={{width:"50",}} id="feedback" label="Feedback" multiline rows={4} value={feedback} onChange={(f) => setFeedback(f.target.value)}/>
                </div><br></br>
                <div>
                <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup aria-labelledby="gender" name="Gander" value={gender} onChange={(g) => setGender(g.target.value)}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                </div><br></br>
                <div>
                    <Typography sx={{ml:3,}} variant="h6">Rating</Typography>
                    <Rating name="size-large" defaultValue={2} size="large" value={rating} onChange={(r) => setRating(r.target.value)}/>
                </div><br></br>
                <br></br>
                <div>
                    <Button variant="contained" color="success" onClick={() => submit()}>Submit </Button>
                </div>
            </FormControl>
            </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                <div>
                    {
                        data && data.map(final => {
                            return(
                                <Card sx={{minWidth:100,p:5,height:"100", m:2,}}>
                                    <CardHeader 
                                        avatar={
                                            <Avatar alt="Pocket-Puppy" src={img} sx={{width:100,height:100,}} />
                                        }
                                    />
                                    <CardActions>
                                        <IconButton aria-label="edit" onClick={() => edit(final.id)}><EditIcon /></IconButton>
                                    </CardActions>
                                    <CardActions>
                                        <IconButton aria-label="delete" onClick={() => remove(final.id)}><DeleteIcon /></IconButton>
                                    </CardActions>
                                    <CardContent> 
                                        <Typography gutterBottom variant="h5">Name:{final.name}</Typography>
                                        <Typography gutterBottom variant="h5">Feedback:{final.feedback}</Typography>
                                        <Typography gutterBottom variant="h5">Gender:{final.gender}</Typography>
                                        <Typography gutterBottom variant="h5">Rating:{final.rating}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        }) 
                    }
                </div>
                </Item>
            </Grid>
            </Grid>
        </div>
    );
}
export default Form;
