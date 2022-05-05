
import './App.css';
import Header from './Pages/Header';
import Main from './Pages/Main';
import Footer from './Pages/Footer';
import Grid from '@mui/material/Grid';
function App() {
  
  return (
    <Grid container spacing={3}>
       <Grid item xs={12}>
       <Header/>
       </Grid>
      
       <Grid item xs={12}>
       <Main/>
       </Grid>
       
       <Grid item xs={12}>
       <Footer/>
       </Grid>
      
    </Grid>
  );
}

export default App;
