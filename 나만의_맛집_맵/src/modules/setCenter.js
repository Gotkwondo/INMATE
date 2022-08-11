import { handleActions, createAction } from 'redux-actions';

const SELECT_LOCATION = 'setCenter/SELECT_LOCATION'

export const selectLocation = createAction(SELECT_LOCATION, id => id);

//  비동기 방식으로 동작하여 이전의 state를 다음 액션 결과로 가져오지 않게 함
export const selectLocationAsync = (id) => dispatch => {
  dispatch(selectLocation(id));
}

const initialState = {
  infos: [
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
    latlng: [37.443014, 126.708708]
  }
};
  

const setCenter = handleActions(
  {
    [SELECT_LOCATION]: (state, { payload: id }) => {
      const index = state.infos.findIndex(info => info.id === id);
      state.centerLoca.latlng = state.infos[index].latlng;
      state.centerLoca.selectID = index + 1;
      return state;
    },
  },
  initialState
);

export default setCenter;