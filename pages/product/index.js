import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import { IoMdEye,IoMdClose,IoMdCloseCircle,IoMdCreate } from "react-icons/io";

import {
  Button,
  ButtonGroup,
LinearProgress,
Dialog,
DialogActions,
DialogContent,
DialogContentText,
DialogTitle,
Backdrop,
CircularProgress,
Paper,
Grid,
TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const removeItem = (array, item) => {
  const newArray = array.slice();
  newArray.splice(newArray.findIndex(a => a === item), 1);

  return newArray;
};

const AdvancedPaginationTable = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [deleted, setDeleted] = useState([]);
  const [openmodal, setOpenmodal] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  const [modaldata, setModaldata] = React.useState(false);

  const fetchUsers = async (page, size = perPage) => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:5000/api_users/users?page=${page}&per_page=${size}&delay=1`
    );

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handleDelete = useCallback(
    row => async () => {
      await axios.delete(`http://localhost:5000/api_users/${row.id}`);
      const response = await axios.get(
        `http://localhost:5000/api_users?page=${currentPage}&per_page=${perPage}`
      );

      setData(removeItem(response.data.data, row));
      setTotalRows(totalRows - 1);
    },
    [currentPage, perPage, totalRows]
  );

  const handleViewData=(value)=>{
    // console.log('view data'+JSON.stringify(value))
    setOpenmodal(true);
  }
  const handleDeleteData=(value)=>{
    // console.log('Delete data'+JSON.stringify(value))
    setOpenmodal(true);
  }
  const handleEditData=function(value){
    // console.log('Edit data'+JSON.stringify(value))
    setOpenmodal(true);
  }
  const handleClose = () => {
    setOpenmodal(false);
  };
  const openProgress = () => {
    setLoading(true);
    setOpenmodal(false);
    setProgress(true);
  };
  const closeProgress = () => {
    setOpenmodal(false);
    setLoading(false);
    setProgress(false);
  };
  const closeModal = () => {
    setModaldata(false);
  };
  const openModal =(value)=> {
    setModaldata(true);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (modaldata) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [modaldata]);


  const columns = useMemo(
    () => [
      {
        name: "Username",
        selector: "username",
        sortable: true
      },
      {
        name: "Password",
        selector: "password",
        sortable: true
      },
      {
        name: "Alamat",
        selector: "alamat",
        sortable: true
      },
      {
        cell: (row) =>{
            return(
                  <>
                    <ButtonGroup size="small"  color="primary" aria-label="contained primary button group">
                      <Button variant="contained" color="primary" style={{background:'#00bcd4'}} onClick={()=>openModal(row)} ><IoMdEye/> </Button>
                      <Button variant="contained" color="primary"  onClick={()=>handleEditData(row)} ><IoMdCreate/> </Button>
                      <Button variant="contained" color="secondary" style={{background:'red'}} onClick={()=>handleDeleteData(row)}><IoMdClose/> </Button>
                    </ButtonGroup>
                  </>
            );
        }
      }
    ],
    [handleViewData,handleDelete]
  );

  const handlePageChange = page => {
    fetchUsers(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchUsers(page, newPerPage);
    setPerPage(newPerPage);
  };

  return (
    <>
    {loading  && <LinearProgress/>}
    <DataTable
      title="Users"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationDefaultPage={currentPage}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      selectableRows
      onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
    />
        <Dialog
          open={openmodal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are You Serious To Delete ??"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Data will be deleted from database
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={openProgress} color="danger">
              No
            </Button>
            <Button onClick={openProgress} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        {/* ALert */}
        <Backdrop className={classes.backdrop} open={progress} onClick={closeProgress}>
          <CircularProgress color="inherit" />
      </Backdrop>


      {/* Modal data */}
      <Dialog
        open={modaldata}
        onClose={closeModal}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers='paper'>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className={classes.root}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                    <TextField required id="outlined-required" label="Required" defaultValue=" " variant="outlined"/>
                    <TextField required id="outlined-required" label="Required" defaultValue=" " variant="outlined"/>
            </Grid>
            <Grid item xs={6}>
                   <TextField required id="outlined-required" label="Required" defaultValue="Hello World" variant="outlined"/>
            </Grid>
            </Grid>
            </div>
            {/* {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={closeModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
};



function Datatable() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <h3>Products</h3>
          <Paper className={classes.paper}>
          <AdvancedPaginationTable />
          </Paper>
      </Grid>
    </Grid>
    </Layout>
  );
}

export default Datatable;