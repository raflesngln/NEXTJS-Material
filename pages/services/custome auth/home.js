//pages/home.js

import { withUser } from '../services/withUser'
import { useAuth } from '../services/useAuth'

const Home = () => {
   const { user } = useAuth();
   
   return user && (
      <div>
         <h1>Hello, {user.name}</h1>
      </div>
   )
}

export default withUser(Home)