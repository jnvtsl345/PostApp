import React,{ useContext } from 'react';
import UserBar from './Components/userComponents/UserBar/UserBar.js';
import Posts from './Components/postComponents/PostList/Posts.js';
import CreatePost from './Components/createPostComponent/CreatePost.js';
import style from './App.module.css';
import {GlobalContext} from './Store/Store.js';
function App() {
  
  const {state} = useContext(GlobalContext);
  const {user} =state;
   //We are using css modules and css grid templates to layout our app so our components are covered by div belonging to a particular grid space. 
  return (      
     <div className={style.appContainer}>
         <div className={style.appUserBar}>
            <UserBar/>                                   
         </div>
        {
          (user.username!=='') ?
            (<div className={style.post}>
              <div className={style.createPost}>
                <CreatePost />
              </div> 
              <div className={style.postList}>
                <Posts />
              </div> 
            </div>) : 
          (<div className={style.initialPage}>Please Login</div>) 
        }
     </div>

  );
}

export default App;
