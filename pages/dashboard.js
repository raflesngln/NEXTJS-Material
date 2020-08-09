import React,{useState,useEffect,Suspense} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'isomorphic-unfetch';

// =======================
import Link from '../src/Link';

import { gantiBioData } from './store/actions/actionApp'
import { useSelector, useDispatch } from 'react-redux'

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


function Dashboard({ posts }) {
  const classes = useStyles();
  const biodata = useSelector((state) => state.userprofile)
  const tema = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const [inputform,setInputform]=useState({nama: "",alamat: ""});

  const changebio=(value , nama)=>{
    const val= value.target.value;
    setInputform(prev=>({
      ...prev,
      [nama]:val
    }))
  }
  const submitData=(evt)=>{
    evt.preventDefault();
    // console.log(evt.target[0].value);
    const nm=evt.target.elements.nama.value;
    const almt=evt.target.elements.alamat.value;
    dispatch(gantiBioData({nama:nm,alamat:almt}));
  }

  return (
    <> <div className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <h3>Dashboard</h3>
      
        <Paper className={classes.paper}>
      <p>Redux Biodata {JSON.stringify(biodata)}</p>
      <p>Redux UI {JSON.stringify(tema)}</p>

        <p>nama {inputform.nama}</p>
      <p>alamat {inputform.alamat}</p>

              <form onSubmit={submitData}>
                <input type="text" name="nama" value={inputform.nama} label='Nama' onChange={(e)=>changebio(e,'nama')}/>
                <input type="text" name="alamat" value={inputform.alamat} onChange={(e)=>changebio(e,'alamat')}/>
                <button type="submit">Ganti biodata</button>
              </form>
          </Paper>

          <h2>PROPSINITIAL</h2>
            <p>ini props: {posts}</p>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
export async function getStaticProps() {
  // https://jsonplaceholder.typicode.com/posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

export default Dashboard;