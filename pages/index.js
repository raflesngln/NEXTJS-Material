import React,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic'
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Layout from '../components/Layout'
// import Dashboard from './dashboard'


const Dashboard = dynamic(
  () => import('./dashboard'),
  { loading: () => <p>Loading.....</p> }
)

export default function Index({ post }) {
  // console.log(props.nama)
  
  
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
      </Layout>
    </>
  );
}


