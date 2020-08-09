import 'isomorphic-unfetch';
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Layout from '../../components/Layout'
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

const Chat=({ posts })=>{
  const classes = useStyles();


  return(
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Notifications</h3>
          <Paper className={classes.paper}>
            <p>isi propsss : {JSON.stringify(posts)}</p>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}



export async function getStaticProps() {
  // Chat.getStaticProps = async () => {
  // https://jsonplaceholder.typicode.com/posts
  const res = await fetch('http://localhost:5000/api_users/users?page=1&per_page=10')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // revalidate: 1,
  }
}

export default Chat