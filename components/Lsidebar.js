import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// import { IconName } from "react-icons/ai";
// import MdKeyboardArrowRight from '@material-ui/icons/MdKeyboardArrowRight';
import { MdArrowBack,MdArrowForward } from "react-icons/md";
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { MdKeyboardArrowRight,MdKeyboardArrowDown,MdSettings,MdAccountCircle,MdExitToApp } from "react-icons/md";
import Head from 'next/head'
import Link from 'next/link'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
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
  nested: {
    paddingLeft: theme.spacing(4),
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Lsidebar( {children, home} ) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activeMenu, setActiveMenu] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  const [opensidemenu, setOpensidemenu] = React.useState(false);

  const handleClickSideMenu = () => {
    setOpensidemenu(!opensidemenu);
  };

   // MENU HEADER ACTIONS
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   const handleProfileMenuOpen = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleMobileMenuClose = () => {
     setMobileMoreAnchorEl(null);
   };

   const handleMenuClose = () => {
     setAnchorEl(null);
     handleMobileMenuClose();
   };

   const handleMobileMenuOpen = (event) => {
     setMobileMoreAnchorEl(event.currentTarget);
   };
   const menuId = 'primary-search-account-menu';
   const renderMenu = (
     <Menu
     className='headerDropdownMenu'
        style={{}}
       anchorEl={anchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       id={menuId}
       keepMounted
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       open={isMenuOpen}
       onClose={handleMenuClose}
     >
       <MenuItem onClick={handleMenuClose}><MdAccountCircle/>&nbsp;Profile</MenuItem>
       <MenuItem onClick={handleMenuClose}><MdSettings/>&nbsp; Setting account</MenuItem>
       <MenuItem onClick={handleMenuClose}><MdExitToApp/>&nbsp; Log Out</MenuItem>
     </Menu>
   );

   const mobileMenuId = 'primary-search-account-menu-mobile';
   const renderMobileMenu = (
     <Menu
       anchorEl={mobileMoreAnchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       id={mobileMenuId}
       keepMounted
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       open={isMobileMenuOpen}
       onClose={handleMobileMenuClose}
     >
       <MenuItem>
         <IconButton aria-label="show 4 new mails" color="inherit">
           <Badge badgeContent={4} color="secondary">
             <MailIcon />
           </Badge>
         </IconButton>
         <p>Messages</p>
       </MenuItem>
       <MenuItem>
         <IconButton aria-label="show 11 new notifications" color="inherit">
           <Badge badgeContent={11} color="secondary">
             <NotificationsIcon />
           </Badge>
         </IconButton>
         <p>Notifications</p>
       </MenuItem>

       <Paper style={{marginTop:'30px'}}>
       <MenuItem onClick={handleProfileMenuOpen}>
         <IconButton
           aria-label="account of current user"
           aria-controls="primary-search-account-menu"
           aria-haspopup="true"
           color="inherit"
         >
           <AccountCircle />
         </IconButton>
         <p>Profile</p>
       </MenuItem>
       </Paper>
     </Menu>
   );


  // RENDER COMPONENTS
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ATT-GROUP
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
      style={{}}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader+ " app-name"} >
        <Typography variant="h5" component="h5" gutterBottom style={{marginRight:'20px',color:'white'}}>
            HRIS System 
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <MdArrowBack /> : <MdArrowForward />}
          </IconButton>
        </div>

        <Divider />
        <List>
          {[{id:1,title:'Dashboard',url:'/'},{id:2,title:'Message',url:'/message'}, {id:3,title:'Notifications',url:'/notifications'}].map((text, idx) => (
            <Link href={text.url}>
              <ListItem button key={idx} style={{backgroundColor:activeMenu===text.id?'#FF5722':''}}  onClick={()=>setActiveMenu(text.id)}>
                <ListItemIcon>{idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={`${text.title}-${activeMenu}`} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
                <List>
                    <ListItem button onClick={handleClickSideMenu}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Report" />
                      {/* {opensidemenu ? <ExpandLess /> : <ExpandMore />}
                     */}
                      {opensidemenu ? <ExpandMore /> : < ChevronRight/>}
                    </ListItem>
                    <Collapse in={opensidemenu} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItem>
                      </List>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItem>
                      </List>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItem>
                      </List>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItem>
                      </List>
                    </Collapse>
                  </List>      
                <List>
                    <ListItem button onClick={handleClickSideMenu}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                      {/* {opensidemenu ? <ExpandLess /> : <ExpandMore />}
                     */}
                      {opensidemenu ? <ExpandMore /> : < ChevronRight/>}
                    </ListItem>
                    <Collapse in={opensidemenu} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                      <Link href="/users">
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Users" />
                        </ListItem>
                        </Link>
                      </List>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Group Users" />
                        </ListItem>
                      </List>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="My Profile" />
                        </ListItem>
                      </List>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Logout" />
                        </ListItem>
                      </List>
                    </Collapse>
                  </List>      
      </Drawer>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
