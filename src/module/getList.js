import axios from 'axios';



const initialState = {
  lists: [],
  centerLoca: {
    // selectID: 0,
    latlng: 0
  }
};
axios.get('http://localhost:3307/restaurant_list')
      .then(res => initialState.lists.push(...res.data))
      .catch()