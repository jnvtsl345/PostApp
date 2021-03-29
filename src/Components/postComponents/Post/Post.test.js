import React from 'react';
import ReactDom from 'react-dom';
import Post from './Post.js';

import { render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);

it("renders component without crashing", () =>{
    const div =document.createElement("div");
    ReactDom.render(<Post ></Post>,div);
})

it("renders post correctly", () =>{
    const post ={ title:"Soccer" ,content:"Best game ever!!", author:"Vatsal"};
    const {getByTestId} = render(<Post {...post} ></Post>)
    expect(getByTestId('post-title')).toHaveTextContent("Soccer")
    expect(getByTestId('post-content')).toHaveTextContent("Best game ever!!")
    expect(getByTestId('post-author')).toHaveTextContent("Vatsal")
})

it("matches snapshot",()=>{
    const post ={ title:"Football" ,content:"Best game ever!!", author:"Vatsal"};
    const tree = renderer.create(<Post {...post}></Post>).toJSON();
    expect(tree).toMatchSnapshot();
})