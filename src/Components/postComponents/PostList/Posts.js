import React,{useContext} from 'react';
import Post from '../Post/Post.js';
import { GlobalContext } from '../../../Store/Store';

function Posts(){
    //Consuming Context to Set Local State
    const {state} = useContext(GlobalContext);
    const {posts} = state;

    //Rendering posts
    return (
        <div>
            {posts.map((post,idx) =>(
            <React.Fragment key={'post'+idx}>
              <Post {...post} />
              <hr />
            </React.Fragment>
            ))}
       </div>        
    )
}

export default Posts;