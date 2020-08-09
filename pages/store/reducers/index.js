import { combineReducers } from 'redux'

import appReducer from './applicationReducer'
import userProfileReducer from './userProfileReducer'


// export default function rootReducer(){
//     appReducer,
//     userProfileReducer
// }

const rootReducer = combineReducers({
    app:appReducer,
    userprofile:userProfileReducer
});

export default rootReducer;