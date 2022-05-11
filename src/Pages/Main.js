import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, List, ListItem,  ListItemText,CardContent,DialogTitle,Dialog, Stack, DialogContent } from '@mui/material';




function Main() {
         const[value, setValues] = useState({
             title: "",
             description: ""
         })

         const[editValue, setEditValues] = useState({
            id: "",
          title: "",
          description: ""

      })
         const[arr,setArr] = useState([])

         const[count,setCount] = useState(0)
          
         const[openDialog,setOpenDialog] = useState(false)
         
         const handleChange = (event) => {
           setValues({
             ...value,
             [event.target.name]: event.target.value,
           });
         }

         const handleEditChange = (event) => {
          setEditValues({
            ...editValue,
            [event.target.name]: event.target.value,
          });
        }

          const handleAddButton = (e) =>{
            e.preventDefault();
          
            if(value.title && value.description){
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
            else{
              alert("Please enter some values")
            }
          }

          const sortingValue = (a,b) => {
               return b.id - a.id;
          }

          const handleDelete = (todo) => {
            let temp = [...arr];
            let index = temp.findIndex((x) => x.id === todo.id);
            temp.splice(index,1);
            setArr(temp);
          }
          const handleView = (todo) => {
            setEditValues({...todo})
            setOpenDialog(true)
            
          }
          const handleCloseDialog = () => {
            setOpenDialog(false)
          }

          const handleUpdate = (e) => {
            e.preventDefault();
            if(editValue.title&&editValue.description){
            let temp = [...arr]
            let obj = {
              id:editValue.id,
              title: editValue.title,
              description: editValue.description
            }
            let index = temp.findIndex(a => a.id === editValue.id)
            temp.splice(index,1)
            temp.push(obj)
            setArr(temp)
            setOpenDialog(false)
          }else{
              alert("Please Enter values")
          }
          }
    return (
        
             <center>
                  <center><h1>TODO APP</h1> </center>
                  <form onSubmit={handleAddButton}>
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
                    <center><Button variant="contained" onClick={handleAddButton} type='submit'>Add</Button></center>  
                </div>
                </form>
                 <center>
                   <Card>
                     <CardContent>
                     <List>
                      {arr.length === 0 && <span>No task</span>}
                      {arr.sort(sortingValue).map((todo) => (
                         <ListItem
                         key={todo.id}
                         secondaryAction={
                          <span><Button variant="contained" onClick={()=>handleView(todo)}>Edit</Button> {" "}<Button variant="contained" onClick={handleDelete}>Delete</Button>
                           </span> 
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
                 <Dialog onClose={handleCloseDialog} open={openDialog}>
                <DialogTitle>Edit TODO</DialogTitle>
                 <DialogContent>
                   <Stack>
                     <br></br>
                                   <TextField
                       
                       id="outlined-basic"
                       label="Tittle"
                       variant="outlined"
                       name='title'
                       placeholder='Enter a todo title'
                       value={editValue.title}
                       onChange={handleEditChange}
                        />
                       <br></br>
                  <TextField
                     id="outlined-basic"
                      label="Description" 
                      variant="outlined" 
                      name='description'
                      placeholder='Enter a todo description'
                      value={editValue.description}
                      onChange={handleEditChange}
                        /> 
                         <br></br>
                        <Button variant='contained' onClick={handleUpdate} type="submit">UPDATE</Button>
                  
                   </Stack>
                 </DialogContent>
                </Dialog>
          </center>
           
     
    );
}

export default Main;
