import React,{useContext, useState} from 'react';
import CreatePostStyle from './CreatePost.module.css'; 
import {GlobalContext} from '../../Store/Store';

function CreatePost (){

  //Consuming Context to Set Local State and get Dispatcher 
  const {state,dispatch} = useContext(GlobalContext);
  const {user} = state;
  const [post,setPost] = useState({title:"",content:"",author:user.username});
  
  //Handels Create Post Form Submission
  const createPost = e =>{
    e.preventDefault();
    if(post.title.length===0 || post.content===0){
        alert("Cannot create a post!! Either title or content is empty.")
      }
    else{
        dispatch({type:'CREATE_POST',post});
        setPost({title:"",content:"",author:user.username});
      }
  }
  
 //Rendering Create Post Form
 return(
    <div className={CreatePostStyle.createPostForm}>
        <h2>Create Post</h2>
        <hr />
        <form onSubmit={createPost}>
            <h3>Author: {user.username}</h3>
            <br/>
            <label htmlFor="postTitle">Title:</label>
            <input type="text" name="title" data-testid="titleText" value={post.title} id="postTitle" onChange={e => setPost({...post, title: e.target.value})} required />
            <label htmlFor="postContent">Content:</label>
            <textarea name="content" id="postContent" data-testid="contentText" value={post.content} onChange={e => setPost({...post, content: e.target.value})} required />
            <input type="submit" data-testid="creatPostButton" value="Create" />
         </form>
   </div>
  );
}

export default CreatePost;