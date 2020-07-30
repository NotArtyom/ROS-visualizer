import * as consts from '../consts';

export const addItem = () => (dispatch) => {
  dispatch({type: consts.addItem});
};
