-The app is divided into three components : 1) UserBar 2)CreatePost 3)PostList, all these three components are broken down into additional components like Login,Logout,Posts, Post.
- For Styling, I am using CSS modules and to layout the app, I am using CSS grid template.
- I have used Context api and useReducers to achive a global state which contains state about our user and post list. I am calling this global component Store.
- To make sure all the components have access to this state I am wrapping my App component with Store in index.js
- I have added a few unit tests for Login and Post component. Created a few snapshot tests and few input tests.
