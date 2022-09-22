import './mainpage.scss'
import Main from "../../components/Main/Main"
import Title from "../../components/Title"

const Mainpage = () => {
  return (
    <div className="wrapper">
      <Title />
      <div className="main_wrapper">
        {/* <div className="main_container"> */}
        <Main />
        {/* </div> */}
      </div>
    </div>
    
  )
};
export default Mainpage;