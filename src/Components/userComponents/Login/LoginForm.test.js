import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from './LoginForm.js';
import { render, cleanup, fireEvent, getByTestId} from '@testing-library/react';
import { Store } from '../../../Store/Store';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);
//Checking if it renders correctly
it("renders component without crashing", () =>{
    const div =document.createElement("div");
    ReactDom.render(<LoginForm ></LoginForm>,div);
});

//Snapshot Testing
it("matches snapshot",()=>{
    const tree = renderer.create(<LoginForm></LoginForm>).toJSON();
    expect(tree).toMatchSnapshot();
})

//Checking if our inputs are storing values or not
it("Input's Work",()=>{
    const {getByTestId} = render(<Store><LoginForm></LoginForm></Store>)
    fireEvent.change(getByTestId("username"),{target:{value:'vatsal'}})
    fireEvent.change(getByTestId("password"),{target:{value:'vatsal345'}})
    expect(getByTestId("username").value).toBe('vatsal')
    expect(getByTestId("password").value).toBe('vatsal345')
})

//Checking if our Login button changes state or not
it("Login Button Work's",()=>{
    const {getByTestId} = render(<Store><LoginForm></LoginForm></Store>)
    fireEvent.change(getByTestId("username"),{target:{value:'vatsal'}})
    fireEvent.change(getByTestId("password"),{target:{value:'vatsal345'}})
    fireEvent.click(getByTestId("btnLogin"))
})