import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


function Main() {
         const[value, setValues] = useState({
             title: "",
             description: ""
         })
         const handleChange = (event) => {
           setValues(event.target.value)
         }
    return (
        
             <center>
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
             </center>
     
    );
}

export default Main;