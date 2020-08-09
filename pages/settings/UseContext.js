import React, { useState, useEffect, useCallback, useMemo,useContext } from "react";
import SidebarMenuContext from '../settings/SidebarMenuContext';



export default function Home( {children, home} ) {
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
        <SidebarMenuContext>
        <div className={classes.root}>
          <Profile/>
        </div>
        </SidebarMenuContext>
        </>
      );
}



// Another components
import SidebarMenuSettings from '../settings/SidebarMenuSettings';
function Profile(props) {
  const {sidebarMenu,foreground,changesidebarMenu,changeForeground} = useContext(SidebarMenuSettings);
  const [bg,setBg]=useState(sidebarMenu.sidebar.title);
  const [fg,setFg]=useState(foreground);
 

  function changeMenuSidebar(){
      changesidebarMenu(bg);
  }

  return (
    <div>
    {/* <p> State {bg} {fg}</p> */}
    <p> BG {JSON.stringify(sidebarMenu)}</p>
    <p> BG {JSON.stringify(foreground)}</p>
      <h1>ACTIONS</h1>
      <input type="text" name='bg' value={bg} onChange={()=>setBg(event.target.value)}/>
      {/* <input type="text" name='fg' value={fg} onChange={()=>setFg(event.target.value)}/> */}
      <p><button onClick={changeMenuSidebar}>Change changesidebarMenu</button></p>
      {/* <p><button onClick={changeFg('orange')}>Change changeForeground</button></p> */}
    </div>
  );
}