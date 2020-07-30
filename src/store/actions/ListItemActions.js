import * as consts from '../consts';

export const addItem = () => (dispatch) => {
  dispatch({type: consts.addItem});
};

export const storeLastMsg = (msg) =>
  (dispatch) => {
    dispatch({
      data: msg,
      type: consts.addMsg
    });
  };

export const start = () => (dispatch) => {
  dispatch({
    type: consts.START
  });
}

export const stop = () => (dispatch) => {
  dispatch({
    type: consts.STOP
  });
}