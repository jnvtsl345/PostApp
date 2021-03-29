import React, {useState, useContext} from 'react' ;
import loginStyle from'./LoginForm.module.css';
import { GlobalContext } from '../../../Store/Store';

function LoginForm(){
  //Using Context to get Dispatcher and Set Local State
  const {dispatch} = useContext(GlobalContext);
  const [userDetails,setDetails] = useState({username:"",password:""});
  
  //Submit Handler for Login Form
  const submitHandler = e =>{
    e.preventDefault();
    if(userDetails.username.length ===0 || userDetails.password.length ===0 ){
      alert("Username and Password cannot be empty!!");
    }
    else{
      dispatch({type:"LOGIN",userDetails});
      setDetails({username:"",password:""});
    }
  }
  
  //React Controlled Login Form
  return(
    <form data-testid="loginForm" onSubmit={submitHandler} className={loginStyle.loginForm}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={userDetails.username} data-testid="username" onChange={e => setDetails({...userDetails, username: e.target.value})} required />
      <label htmlFor="username">Password:</label>
      <input type="password" name="password" id="password" value={userDetails.password} data-testid="password" onChange={e => setDetails({...userDetails, password: e.target.value})} required />
      <input type="submit" data-testid="btnLogin" value="Login" />
    </form>
  ) 
}

export default LoginForm;