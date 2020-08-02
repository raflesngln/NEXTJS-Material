import React, { useState, useEffect, useCallback, useMemo } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Listdata() {
  const classes = useStyles();
  const [loadingProgress, setLoadingProgress] = useState(true);

  
  // <h2><LinearProgress color="secondary" /></h2>


  return (
    <>
      <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Users</h3>
          <Paper className={classes.paper}>
          <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
        {/* {loadingProgress  && <LinearProgress color="secondary" />} */}
        {/* <LinearProgress color="secondary" /> */}
          
    </>
  );
}
