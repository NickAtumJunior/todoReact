
import './App.css';
import Main from './Pages/Main';
import Grid from '@mui/material/Grid';
function App() {
  
  return (
    <Grid container spacing={3}>

      
       <Grid item xs={12}>
       <Main/>
       </Grid>
       

      
    </Grid>
  );
}

export default App;
