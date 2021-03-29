import React from 'react';
import { Typography, Grid, Paper, Hidden, Button } from "@material-ui/core";
import useStyles from "../components/Styles";
import Person from './assets/img/person.jpg'

const Events = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container className={classes.eventCont} >
                
                <Grid item xs={4} className={classes.eventLine}/> 
                <Grid item xs={4} /> 
            
                <Grid item xs={4}  container>
                    <Paper className={classes.eventPaper} >
                        <Typography className={classes.eventTitle}>
                            Events and Updates
                        </Typography>
                        <Hidden xsDown>
                        <Typography item  className={classes.eventText}>
                   We host many events and meet-ups throughout the year, they are regularly updated below but you can you also stay connected and up to date through our social media platforms. So if you want the lastes updates make sure to follow us on our Facebook or Twitter!
      
                    </Typography>
                    
                    </Hidden>
                    

                    </Paper>
                </Grid>
                <Grid item  xs={12} container className={classes.personCont}>
                
                <Grid item>
                <img className={classes.person} src={Person} alt='person pets cow'/>
                </Grid>
                <Grid item className={classes.eventLine2}/>
                </Grid>
               
                
            </Grid>

        </div>
    )
}

export default Events
