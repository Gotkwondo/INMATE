import MiddleContainer from './containers/MiddleContainer'
import Title from './components/modules/Title';
import Bar from './components/modules/Bar/Bar';

import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3307/restaurant_list')
      .then(res => console.log(res.data))
      .catch()
  })
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <MiddleContainer />
        <Bar />
      </div>

    </div>
  )
};

export default App;
