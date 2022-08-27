import DesktopMapContainer from './containers/desktopMapContainer'
import MobileMapContainer from './containers/mobileMapContainer'
import Title from './components/Title';
import { useMediaQuery } from 'react-responsive';


const App = () => {
  const Desktop = useMediaQuery({
    query: "(min-width: 1024px)"
  })
  const Mobile = useMediaQuery({
    query: "(max-width: 1023px)"
  })
  return (
    <>
      <Title />
      {Desktop && <DesktopMapContainer />}
      {Mobile && <MobileMapContainer />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
};

export default App;
