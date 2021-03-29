import React,{ useContext } from 'react';
import LoginForm from '../Login/LoginForm';
import Logout from '../Logout/Logout.js';
import userBarStyle from './UserBar.module.css';
import { GlobalContext } from '../../../Store/Store.js';
function UserBar() {
    //Consuming Context to Get Username
    const {state} = useContext(GlobalContext);
    const {user} =state

    //Validating if Username exists or not and rendering Login or Logout components accordingly
    return (
        <div>
            <i className={userBarStyle.appName}>Post App</i>
            {(user.username!=="") ? (
             <Logout/>
             ) : (
            <LoginForm />
            )}
        </div>
    );
}

export default UserBar;