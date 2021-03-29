import React,{ useReducer } from 'react';
import { createContext } from 'react';
import appReducer from './AppReducer';
export const GlobalContext = createContext({
    state: {},
    dispatch: {}
})

export const Store= (props) =>{
    const initialState ={
        user:{username:'',password:''},
        posts:[{title: 'React', content: 'A JavaScript library for building user interfaces', author: 'someuser'},
               {title: 'React Hooks', content: 'JavaScript functions to hook into React state', author: 'someuser'},
               {title: 'Material UI', content: 'A popular React UI Framework', author: 'someuser'}
            ]
    } 
    
    const [state,dispatch] = useReducer(appReducer,initialState);
      return(
          <GlobalContext.Provider value={{state,dispatch}} >
              {props.children}
          </GlobalContext.Provider>
    )
}