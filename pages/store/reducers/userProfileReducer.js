
import { actionTypes } from '../types/index';

const initialState = {
  nama:'',
  alamat:'',
  photo: false,
  isLogin: 0,
  isAuth:false,
}


// REDUCERS
export default function userProfileReducer(state =initialState, action){
  switch (action.type) {
    case actionTypes.IS_AUTH:
      return {
        ...state,
        isAuthentication: action.data
      }
    case actionTypes.IS_LOGIN:
      return {
        ...state,
        isLogged: action.data
      }
    case actionTypes.MY_THEME:
      return {
        ...state,
        appTheme: action.data,
      }
      case actionTypes.LOAD_BIODATA:
        return {
          ...state,
          myBioData: action.data,
        }
      case actionTypes.CHANGE_BIODATA:
          return {
            ...state,
            nama: action.data.nama,
            alamat: action.data.alamat,
      }
    default:
      return state
  }
}
