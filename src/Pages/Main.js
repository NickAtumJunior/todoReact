import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, List, ListItem,  ListItemText,CardContent } from '@mui/material';




function Main() {
         const[value, setValues] = useState({
             title: "",
             description: ""
         })
         const[arr,setArr] = useState([])

         const[count,setCount] = useState(0)

         const handleChange = (event) => {
           setValues({
             ...value,
             [event.target.name]: event.target.value,
           });
         }
          const handleAddButton = () =>{
            let temp = [...arr]
            let obj = {
              id: count,
              title: value.title,
              description: value.description,
            }
            temp.push(obj);
            setCount(count + 1);
            setArr(temp);
            setValues({
              title: "",
              description: "",
            })
          }

          const sortingValue = (a,b) => {
               return b.id = a.id;
          }

          const handleDelete = (todo) => {
            let temp = [...arr];
            let index = temp.findIndex((x) => x.id === todo.id);
            temp.splice(index,1);
            setArr(temp);
          }
    return (
        
             <center>
                  <center><h1>TODO APP</h1> </center>
                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={12}>
                      <TextField
                       
                        id="outlined-basic"
                        label="Tittle"
                        variant="outlined"
                        name='title'
                        placeholder='Enter a todo title'
                        value={value.title}
                        onChange={handleChange}
                         />
                        </Grid>
                     <Grid item xs={12}>
                     <TextField
                      id="outlined-basic"
                       label="Description" 
                       variant="outlined" 
                       name='description'
                       placeholder='Enter a todo description'
                       value={value.description}
                       onChange={handleChange}
                         /> 
                        
                       </Grid>
                 </Grid>

                 <div> 
                    <br></br>
                    <center><Button variant="contained"  onClick={handleAddButton}>Add</Button></center>  
                </div>
                 <center>
                   <Card>
                     <CardContent>
                     <List>
                      {arr.length === 0 && <span>No task</span>}
                      {arr.sort(sortingValue).map((todo) => (
                         <ListItem
                         key={todo.id}
                         secondaryAction={
                           <Button variant="contained" onClick={handleDelete}>Delete</Button>
                         }
                       >
                         <ListItemText
                            primary={todo.title}
                            secondary={todo.description} 
                         />
   
                         </ListItem>
                      ))}
                     
                 </List>
                     </CardContent>
                   </Card>
                 
                 </center>
          </center>
           
     
    );
}

export default Main;
