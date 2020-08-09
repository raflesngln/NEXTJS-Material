
import { actionTypes } from '../types/index';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  exampleData: [],
  error: null,
}


// REDUCERS
export default function appReducer(state =initialState, action){
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light,
      }
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    
    case actionTypes.LOADING_DATA_FAILURE:
      return { ...state, error: true }
    default:
      return state
  }
}
