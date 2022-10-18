//  리스트를 얻어오는 함수
import axios from 'axios';
import secret from '../private_setting.json';

const initialState = {
  lists: [],
  centerLoca: {
    latlng: 0
  }
};
axios.get(`http://${secret.host}:8080/maplist`)
      .then(res => initialState.lists.push(...res.data))
      .catch()