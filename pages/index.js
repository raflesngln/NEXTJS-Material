import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Layout from '../components/Layout'
import Dashboard from './dashboard'

export default function Index() {
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