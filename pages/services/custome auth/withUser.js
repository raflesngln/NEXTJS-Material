//services/withUser.js

import { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import useSWR from 'swr'
import Router from 'next/router'
import { useAuth } from '../services/useAuth'

function getRedirectTo() {
  if (typeof window !== 'undefined' && window.location) {
    return window.location
  }
  return {}
}

export const withUser = WrappedComponent => {
   const Wrapper = props => {
      const { setUser } = useAuth()
      const [token, setToken] = useState()
      const [userId, setUserId] = useState()
      const [shouldFetchUser, setShouldFetchUser] = useState(false)

      const cookieUserId = cookie.get('userId')
      const cookieToken = cookie.get('token')
      
      const fetchWithToken = (url, token) => {
        return fetch(url, {
          method: 'GET',
          headers: { 'x-access-token': token },
        }).then(res => res.json())
      }

      const { data: fetchedUser } = useSWR(shouldFetchUser ? [`/api/users/${userId}`, token] : null, fetchWithToken)

      useEffect(() => {
         const redir = getRedirectTo()
         if (cookieToken && cookieUserId) {
           setToken(cookieToken)
           setUserId(cookieUserId)
           setShouldGetUser(true)
         } else {
           Router.replace(`/login?r=${redir.pathname + encodeURIComponent(redir.search)}`, '/login', { shallow: true })
         }
      }, [shouldGetUser])

      useEffect(() => {
         if (fetchedUser) {
           setUser(fetchedUser)
           setRoles(fetchedUser.roles)
         }
       }, [fetchedUser])

      return <WrappedComponent {...props} />
   }
   
   return Wrapper
}