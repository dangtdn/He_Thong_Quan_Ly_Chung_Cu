import React, {Component} from 'react'
import { Route } from 'react-router';
import Modal from '../Components/Modal/Modal';
import SideBar from '../Components/SideBar/SideBar';

export const HomeTemplate = (props) => {

    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <div className="wrapper">
            <SideBar/>
            <Component {...propsRoute}/>
            <Modal/>
        </div>
    }}/>
}
