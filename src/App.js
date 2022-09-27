import { Routes, Route } from 'react-router-dom';
import InfoPage from './pages/info';
import MapListPage from './pages/inmate_mapList';
import Mainpage from './pages/mainpage';

const App = () => {
  return (
    <div className="outer">
      <Routes>
        <Route path="/INMATE/" element={<Mainpage />} />
        <Route path="/INMATE/maplist" element={<MapListPage />} />
        <Route path="/INMATE/info" element={<InfoPage />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지 입니다.</h1>}/>
      </Routes>
    </div>
  )
};

export default App;
