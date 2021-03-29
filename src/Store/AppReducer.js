function userReducer(state,action){
    switch(action.type) {
        case 'LOGIN':
            state.username = action.userDetails.username;
            state.password = action.userDetails.password;
            return state;
        case 'LOGOUT':
            return {
                username : '',
               password : ''
            }
        default:
            return state;       
    }
}

function postsReducer(state,action) {
    switch (action.type){
        case 'CREATE_POST':
             return [action.post,...state];   
        default:
            return state;
    }
}

export default function appReducer(state,action){
    return{
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action)
    }
}