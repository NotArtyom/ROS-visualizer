import React from 'react';
import * as consts from '../consts';
import {ListItem} from '../../components/listItemComponent';

const initState = []

export const listItemReducer = (state = initState, action) =>{
  switch (action.type) {
    case consts.addItem:{
      return [...state, <React.Fragment><ListItem dark={false}/></React.Fragment>]
    }
    default:
      return state
  }
}

const initMsg = {
  msg:{}
}

export const msgReducer = (state = initMsg, action) =>{
  switch (action.type) {
    case consts.addMsg:{
      return {
        ...state,
        msg: action.data,
      }
    }
    default:
      return state
  }
}

const initCond = {
  state: true,
}
export const stopReducer = (state = initCond, action)=>{
  switch (action.type) {
    case consts.STOP:{
      return {
        ...state,
        state: false,
      }
    }
    default:
      return state
  }
}