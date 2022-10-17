//  리스트를 얻어오는 함수
import axios from 'axios';

const initialState = {
  lists: [],
  centerLoca: {
    latlng: 0
  }
};
axios.get('http://localhost:8080/maplist')
      .then(res => initialState.lists.push(...res.data))
      .catch()