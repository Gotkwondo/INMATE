import MiddleContainer from './containers/MiddleContainer'
import Title from './components/modules/Title';
import Bar from './components/modules/Bar/Bar';

const App = () => {
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