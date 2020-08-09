// in file _app.js

import React, { useEffect } from 'react'
import Cookies from "universal-cookie";

import useGlobalState from './context';
import { getAccount } from '../libs/requests';

const withAuth = (WrappedComponent) => {
  
  const FuncComponent = ({ children, ...props }) => {
    const { user, setUser } = useGlobalState(); 

    useEffect(() => {
      if (!user && props.user && props.account) 
        setUser(props.user, props.account);
    });

    return (<WrappedComponent {...props}>{children}</WrappedComponent>);
  };

  FuncComponent.getInitialProps = async (ctx) => {
    // If Page/Component has a `getInitialProps`, we should call it.
    const props = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx);

    if (ctx && ctx.req) {
      let cookies = new Cookies(ctx.req?.headers?.cookie);
      if (cookies.get('secret_token')) {
        const res = await getStatus(ctx.req.headers.cookie);
        if (res.success) {
          const account = await getAccount(ctx.req.headers.cookie);
          return { ...props, user: res.user, account: account };
        }
      }
    }
    return { ...props, user: null };
  }

  return FuncComponent;
}

export default withAuth;