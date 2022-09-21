import { connect } from 'react-redux';
import { selectLocationAsync } from '../module/setCenter';
import Right from '../components/modules/Right';
import Left from "../components/modules/Left";
import './middleContainer.scss';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const DesktopMapContainer = ({
  centerLoca,
  selectLocationAsync
}) => {
  const [list, setLists] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3307/restaurant_list')
      .then(res => setLists(res.data))
      .catch()
  }, []);

  return (
    <div className="middle-wrapping">
      <div className="contents">
        <Left list={list} selectLocationAsync={selectLocationAsync} />
        <Right list={list} centerLoca={centerLoca}/>
      </div>
    </div>
  )
};

//  이후 맛집 리스트를 연결할 때 사용
export default connect(
  //  비구조화 할당을 통해 원하는 상태를 가져올 때는
  //  모듈에서 export한 상태를 모듈을 가져와야 가능하다.
  //  이 상황에서는 state로 작성할 경우 에러가 발생하며 setCenter로 작성해야 한다.
  ({ setCenter }) => ({
    centerLoca: setCenter.centerLoca
  }),
  {
    //  액션 함수를 작성
    selectLocationAsync
  }
)(DesktopMapContainer);