import { Routes, Route } from 'react-router-dom';
import MapListPage from './pages/inmate_mapList';
import Mainpage from './pages/mainpage';

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <Inmate_mapList /> */}
      </div>
      <Routes>
        <Route path="/INMATE/" element={<Mainpage />} />
        <Route path="/INMATE/maplist" element={<MapListPage />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지 입니다.</h1>}/>
      </Routes>
    </div>
  )
};

export default App;
