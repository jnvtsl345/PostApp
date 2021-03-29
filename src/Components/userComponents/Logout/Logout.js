import React,{ useContext } from 'react' ;
import logoutStyle from './Logout.module.css';
import { GlobalContext } from '../../../Store/Store';

function Logout(){
    
    //Consuming Context to get Dispatcher and Set Local State
    const {state,dispatch} = useContext(GlobalContext);
    const {user} = state;

    //Handels Logout Click
    const LogoutClick = e =>{
       e.preventDefault();
       dispatch({type:'LOGOUT'});
    }   
    
    //Redering Current User and Logout Button
    return(
     <div className={logoutStyle.logoutForm}>
         <label data-testid="loggedInUser">Logged In As:<strong> {user.username}</strong> </label>
         <button data-testid="btnLogout" onClick={LogoutClick}>Logout</button>
     </div>
    );
}

export default Logout; 