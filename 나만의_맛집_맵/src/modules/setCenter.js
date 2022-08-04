import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';


// const CHANGE_CENTER = 'setCenter/CHANGE_CENTER';
const SELECT_LOCATION = 'setCenter/SELECT_LOCATION'

// export const changeCenter = createAction(CHANGE_CENTER, id => id);

export const selectLocation = createAction(SELECT_LOCATION, id => id);

const initialState = {
  info: [
    {
      latlng: [37.443014, 126.708708],
      name: '요리야 김밥',
      id: 1,
      show: false
    },
    {
      latlng: [37.442971, 126.708892],
      name: '서오릉 피자',
      id: 2,
      show: false
    },
    {
      latlng: [37.413328, 126.678618],
      name: '그시절 동태탕',
      id: 3,
      show: false
    },
  ],
  centerLoca: {
    selectID: 0,
    latlng: [0, 0]
  }
};
  

const setCenter = handleActions(
  {
    [SELECT_LOCATION]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.info.findIndex(info => info.id === id);
        draft.centerLoca.selectID = index + 1;
        draft.centerLoca.latlng = draft.info[index].latlng;
      })
  },
  initialState
);

export default setCenter;