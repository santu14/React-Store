import "./App.css";
import React from "react";
import Nav from "./components/Header";
import { ThemeProvider, Grid, Paper } from "@material-ui/core";
import theme from "./components/Theme";
import useStyles from "./components/Styles";
import AuthForm from "./AuthForm";
import AuthState from "./AuthForm/isAuthContext";
import Jumbotron from './components/Jumbotron'
import ImageUploader from "./components/ImageUploader/index.js";
import Gallery from "./components/Gallery";
import AdminButton from "./components/AdminButton";
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';


import Participate from "./components/Participate";


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthState>
          <Grid container direction="column" spacing={3} xs={12}>
            {/* nav container */}
            <Nav className={classes.nav}/>
            
            {/* tagline container */}
   
              <Jumbotron/>

              <About/>
              <Participate/>

              <Events/>
              <Gallery/>
              
             <Contact/>
          
         
      
            
               {/* <ImageUploader/>  
              
            
             auth form container  */}
            <Grid item xs={12} container>
              <Grid item xs={0} sm={2} md={3} lr={4} />
              <Grid item xs={12} sm={8} md={6} lr={4}>
                <Paper className={classes.paper}>
                  
                  {/* <AuthForm /> */}
                  <AdminButton/>
                </Paper>
              </Grid>
              <Grid item xs={0} sm={2} md={3} lr={4} />
            </Grid>
          </Grid>
        </AuthState>
      </ThemeProvider>
    </div>
  );
}

export default App;
