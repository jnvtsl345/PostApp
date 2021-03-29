import React from 'react';
import postStyle from './Post.module.css';
import PropTypes from 'prop-types';
function Post({ title, content, author }){
    return(
        <div className={postStyle.post}>
            <h3 data-testid="post-title">{title}</h3>
            <p data-testid="post-content">{content}</p>
            <label data-testid="post-author">Created By:<strong> {author}</strong></label>
        </div>
    )
}

Post.propTypes={
    title:PropTypes.string,
    content:PropTypes.string,
    author:PropTypes.string
}
export default Post;