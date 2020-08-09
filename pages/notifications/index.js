import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Listdata from './Listdata'
import Layout from '../../components/Layout'


function Dashboard() {
  return (
    <>
    <Layout>
        <Listdata/>
      </Layout>
    </>
  );
}


export default Dashboard