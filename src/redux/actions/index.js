

import {
 START_ACTION,
 STOP_ACTION
  } from '../actionTypes';
 



export const ActionWithPayload = (type="",payload=[])=>{
    return{
        type:type,
        payload:payload,
    }
}
export const ActionWithoutPayload = (type="")=>{
    return{
        type:type,
        payload:[],
    }
}

 
  export const startAction = (name, params) => ({
    type: START_ACTION,
    payload: {
      action: {
        name,
        params,
      },
    },
  });
  
  export const stopAction = (name) => ({
  
    type: STOP_ACTION,
    payload: { name },
  });
  