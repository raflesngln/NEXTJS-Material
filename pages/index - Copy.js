import React,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Layout from '../components/Layout'
import Dashboard from './dashboard'

// import { startClock, serverRenderClock, initializeStore } from './store/actions/actionApp'
import { startClock, serverRenderClock, initializeStore } from './store/store'
import Examples from './store/contoh/example'
import Link from 'next/link'
import { gantiBioData } from './store/actions/actionApp'
import { useSelector, useDispatch } from 'react-redux'
import Menulayout from './store/menucontoh';

export default function Index() {
  const biodata = useSelector((state) => state.userprofile)
  const tema = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const [bio, setBio] = useState({nama:'mawar',alamat:'medan'});
  const [inputform,setInputform]=useState({nama: "",alamat: ""});

  const changebio=(value , nama)=>{
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
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
    setBio(prev=>({
      ...prev,
      nama:nm,
      alamat:almt
    }))
    dispatch(gantiBioData({nama:nm,alamat:almt}));
  }

  
  return (
    <>
      {/* <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js exampless
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box> */}
      <Layout>
        <Dashboard/>
    <Menulayout>
            <h6>biodata : {JSON.stringify(biodata)}</h6>
            <h6>tema app :{JSON.stringify(tema)}</h6>
            <div>
                <p>nama {JSON.stringify(bio)}</p>
              <h1>HOME</h1>
                <p>nama {inputform.nama}</p>
                <p>alamat {inputform.alamat}</p>

              <h2>BIODATA {JSON.stringify(biodata)}</h2>
              <form onSubmit={submitData}>
                <input type="text" name="nama" value={inputform.nama} label='Nama' onChange={(e)=>changebio(e,'nama')}/>
                <input type="text" name="alamat" value={inputform.alamat} onChange={(e)=>changebio(e,'alamat')}/>
                <button type="submit">Ganti biodata</button>
              </form>
            </div>
    </Menulayout>
      </Layout>
    </>
  );
}