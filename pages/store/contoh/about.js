import { useSelector, useDispatch } from 'react-redux'
import {gantiBioData } from '../actions/actionApp'
import { useState } from 'react'
import Menulayout from '../menucontoh';
import 'isomorphic-unfetch';

const About = ({ posts }) => {
  const biodata = useSelector((state) => state.userprofile)
  const dispatch = useDispatch()

  const [bio, setBio] = useState({nama:'mawar',alamat:'medan'});
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
  setBio(prev=>({
    ...prev,
    nama:nm,
    alamat:almt
  }))
  dispatch(gantiBioData({nama:nm,alamat:almt}));
}

  return (
    <Menulayout>
        <p>nama {JSON.stringify(bio)}</p>
      <h1>Halaman About</h1>
  <p>ISI PROPS ABOUT: {JSON.stringify(posts)}</p>
        <p>nama {inputform.nama}</p>
        <p>alamat {inputform.alamat}</p>

      <h2>BIODATA {JSON.stringify(biodata)}</h2>
      <form onSubmit={submitData}>
        <input type="text" name="nama" value={inputform.nama} label='Nama' onChange={(e)=>changebio(e,'nama')}/>
        <input type="text" name="alamat" value={inputform.alamat} onChange={(e)=>changebio(e,'alamat')}/>
        <button type="submit">Ganti biodata</button>
      </form>
    </Menulayout>
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

export default About