import { actionTypes } from '../types/index';

// ACTIONS For Manage UI applications

export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = (data) => {
  return { type: actionTypes.INCREMENT,data }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

//////////////////////////////////////
export const loadBiodata = (data) => {
    return { type: actionTypes.LOAD_BIODATA, data }
  }
  export const gantiBioData = (data) => {
    return { type: actionTypes.CHANGE_BIODATA,data }
  }
///////////////////////////////////////

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

export const loadExampleData = (data) => {
  return { type: actionTypes.LOAD_EXAMPLE_DATA, data }
}

export const loadingExampleDataFailure = () => {
  return { type: actionTypes.LOADING_DATA_FAILURE }
}
