import { useNavigate, useLocation } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const DashFooter = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();


    const onGoHomeClicked = () => navigate('/dash')

    let goHomeBtn = null;

   if(pathname !== "/dash") {
     goHomeBtn = (
        <button className="dash-footer__button icon-button" 
        onClick={onGoHomeClicked}
        title="Home"
        >
       <FontAwesomeIcon icon = {faHome}/>
        </button>
           
    )
   }
    
  return (
    <footer className='dash-footer'>
         {goHomeBtn}
        <p>Current User:</p>
        <p>Status: </p>
    </footer>
  )
}

export default DashFooter