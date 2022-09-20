import axios from 'axios';

export const getList = () => {
  axios.get('http://localhost:3307/restaurant_list')
    .then(res => console.log(res.data))
    .catch()
}
