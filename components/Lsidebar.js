import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

// import AppBar,Toolbar from '@material-ui/core/AppBar';
import {AppBar,
  Toolbar,
  List,
  ListItem ,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Badge,
  Menu,
  Paper,
  ListSubheader,
  Collapse,
  InputBase,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { MdArrowBack,MdArrowForward,MdKeyboardArrowRight,MdKeyboardArrowDown,MdSettings,MdAccountCircle,MdExitToApp } from "react-icons/md";
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";
import {useStyles} from './styles/sidebarStyles'

const menus=[
  {id:1,title:'Dashboard',url:'/'},
  {id:2,title:'About',url:'/store/contoh/about'},
  {id:3,title:'Profile',url:'/store/contoh/profile'},
  {id:4,title:'Message',url:'/message'},
  {id:5,title:'Chats',url:'/chat'},
  {id:6,title:'Product',url:'/product'},
  {id:7,title:'Notifications',url:'/notifications'},
  {id:8,title:'Account',url:'/Account'},
  {id:9,title:'Users',url:'/Users'},
  {id:10,title:'Company',url:'/Company'},
  {id:11,title:'Department',url:'/Department'},
]


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
          {menus.map((text, idx) => (
            <Link href={text.url} key={text.id}>
              <ListItem button key={idx} style={{backgroundColor:activeMenu===text.id?'#FF5722':''}}  onClick={()=>setActiveMenu(text.id)}>
                <ListItemIcon>{idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={`${text.title}`} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
            
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
