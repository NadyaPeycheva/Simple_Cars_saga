import { useSelector } from 'react-redux';
import logo from '../../resources/cars.png'

import"./HeaderStyles.scss"
import LoginButton from './loginButton/LoginButoon';
const Header=()=>{
    const{username}=useSelector((state)=>state.loginUserReducer);
    return(
        <header className="header">
            <img src={logo} alt='cars logo'/>
            {!username&&<LoginButton/>}
        </header>
    )

}
export default Header;