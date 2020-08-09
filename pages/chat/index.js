import 'isomorphic-unfetch';
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

////
import InputHoc from './InputHoc'
import WithLabel from './WithLabel'
import ToggleInput from './ToggleInput'

const InputWithLabel = WithLabel(InputHoc);
const ToggleAbleInput = ToggleInput(InputHoc);

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
const [nama,setNama]=useState();

  const handleNameChange=()=>{
    console.log('asas')
  }
  const submit=()=>{
    console.log('asas')
  }
  
  return(
    <Layout>
      {/* <div className={classes.root}> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>CHATS</h3>
          <Paper className={classes.paper}>
            <p>isi propsss : {JSON.stringify(posts)}</p>

            <h2>inputan</h2>
    <form>
        <InputWithLabel           
          label="Enter Name" 
          inputOnChange={handleNameChange}
          inputValue={nama}
          className='warna'
          inputPlaceholder="Enter name here"/>

        <ToggleAbleInput 
          checkboxLabel="Aktifin input di bawah" 
          inputOnChange={handleNameChange}
          inputValue={nama}
          inputPlaceholder="Cek dulu checkbox di atas"/>

        <button className="button is-info" onClick={submit}>
          Ok
        </button>
      </form>
          </Paper>
        </Grid>
      </Grid>
    {/* </div> */}
    </Layout>
  )
}




      
export async function getStaticProps() {
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