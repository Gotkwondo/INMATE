import MiddleContainer from './containers/MiddleContainer'
import Title from './components/modules/Title';
import Bar from './components/modules/Bar/Bar';


const App = () => {
  // const Desktop = useMediaQuery({
  //   query: "(min-width: 1024px)"
  // })
  // const Mobile = useMediaQuery({
  //   query: "(max-width: 1023px)"
  // })
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
