
import React, { useState, useEffect, useCallback, useMemo,useContext } from "react";
import SidebarMenuSettings from '../settings/SidebarMenuSettings';


export default function Detail(props) {
    const {sidebarMenu,foreground,changesidebarMenu,changeForeground} = useContext(SidebarMenuSettings);
    const [bg,setBg]=useState(sidebarMenu.sidebar.title);
    const [fg,setFg]=useState(foreground);
   
  
    function changeMenuSidebar(){
        changesidebarMenu(bg);
    }
  
  
  
    function changeFg(val){
      changeForeground(fg)
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