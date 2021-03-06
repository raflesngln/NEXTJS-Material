import React from 'react';
import clsx from 'clsx';
import { fade,makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';

import Lsidebar from './Lsidebar'
// import Lheader from './Lheader'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}));


export default function Layout( {children, home} ) {
      const classes = useStyles();
      const theme = useTheme();
      const [open, setOpen] = React.useState(true);

        const handleDrawerOpen = () => {
          setOpen(true);
        };

        const handleDrawerClose = () => {
          setOpen(false);
        };
      
// RENDER COMPONENTS
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <Lsidebar/>

      <main
      style={{paddingTop:'100px',backgroundColor:'#edebeb'}}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className=" progressloading "><LinearProgress color="secondary" /></div>
        <div className={classes.drawerHeader}>
          
          {children}
          </div>
      </main>
    </div>
    </>
  );
}
