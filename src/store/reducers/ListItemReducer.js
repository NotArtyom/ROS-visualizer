import React from 'react';
import * as consts from '../consts';
import {ListItem} from '../../components/listItemComponent';

const initState = []

export const listItemReducer = (state = initState, action) =>{
  switch (action.type) {
    case consts.addItem:{
      return [...state, <React.Fragment><ListItem/></React.Fragment>]
    }
    default:
      return state
  }
}