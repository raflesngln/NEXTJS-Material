// pages/_app.js
import Router from 'next/router'
import { useState, useEffect, createContext } from 'react'
import cookie from 'js-cookie'
import { trigger, mutate } from 'swr'

export const UserContext = createContext()

const App = ({ Component, pageProps }) => {
   const [user, setUser] = useState()
   const [token, setToken] = useState()

   // get the token from the cookie
   const cookieToken = cookie.get('token')

   // login function to be called on a login page
   const login = ({ user, token }) => {
      // save the token from the login response in a cookie
      cookie.set('token', token, { expires: 14 })
      // save the userId from the login response in a cookie
      cookie.set('userId', user.id, { expires: 14 })
      setUser(user)
      setToken(token)
      trigger(`/api/users/${user.id}`)
   }

   const logout = () => {
      setUser(null)
      cookie.remove(token)
      // invalidate the user with swr
      mutate(`/api/users/${user.id}`, {}, false)
      Router.push('/login')
   }

   useEffect(() => {
      if (cookieToken) setToken(cookieToken)
   }, [])

   return (
      <UserContext.Provider
         value={{
            user: user,
            token: cookieToken || token,
            login: login,
            logout: logout,
            setUser: setUser,
         }}>
         <Component {...pageProps} />
      </UserContext.Provider>
   )
}

export default App