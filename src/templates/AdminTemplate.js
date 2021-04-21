import React, {Component} from 'react'
import { Route } from 'react-router';
import SideBar from '../Components/SideBar/SideBar';

export const AdminTemplate = (props) => {

    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <div className="wrapper">
            <SideBar/>
            <Component {...propsRoute}/>
        </div>
    }}/>
}