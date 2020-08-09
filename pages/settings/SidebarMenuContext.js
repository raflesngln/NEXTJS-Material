import SidebarMenuSettings from './SidebarMenuSettings'
import React,{useState, useEffect, useCallback, useMemo,useContext} from 'react';

    export default function SidebarMenuContext( {children, home} ) {
        //Manage menu
          const [sidebarMenu, setSidebarMenu] = useState({
            sidebar: {id:1,title:"Home"},
          });
          const [foreground, setForeground] = useState({
            header:{ id: 2,title: "account"}
          });
        
        
          function changesidebarMenu(values){
            // setSidebarMenu(prev=>({ ...prev,sidebar.title:values}));
            setSidebarMenu((prevState) => ({
              ...prevState,
              sidebar: {
                ...prevState.sidebar,
                title: values,
              }
            }));
          }
        
          
          function changeForeground(values) {
            // setForeground(prev=>({ ...prev,title:values}));
            setForeground((prevState) => ({
              ...prevState,
              sidebar: {
                ...prevState,
                id:'',
                title: "Lorem ipsum",
              }
            }));
          }
         
  
  // RENDER COMPONENTS
    return (
      <>
      <SidebarMenuSettings.Provider value={{ sidebarMenu, foreground,changesidebarMenu,changeForeground}}>
            {children}
      </SidebarMenuSettings.Provider>
      </>
    );
  }