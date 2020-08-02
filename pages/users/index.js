import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Listdata from './Listdata'
import Layout from '../../components/Layout'


export default function Dashboard() {
  return (
    <>
    <Layout>
        <Listdata/>
      </Layout>
    </>
  );
}