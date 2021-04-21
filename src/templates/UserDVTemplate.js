import React, {Component} from 'react'
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom'

export const UserDVTemplate = (props) => {

    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Apartment Manager</h3>
                    <strong>AM</strong>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <NavLink to="/home">
                            <i className="fas fa-home" />
          Home
        </NavLink>
                    </li>
                    <li>
                        <a href="#profileSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-user-circle" />
          Hồ sơ
        </a>
                        <ul className="collapse list-unstyled" id="profileSubmenu">
                            <li>
                                <NavLink to="/profile">Thông tin</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#manageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fa fa-book-open" />
          Quản lý
        </a>
                        <ul className="collapse list-unstyled" id="manageSubmenu">
                            <li>
                                <NavLink to="/dichvu">Dịch vụ</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#settingSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-cog" />
          Cài đặt
        </a>
                        <ul className="collapse list-unstyled" id="settingSubmenu">
                            <li>
                                <NavLink to="/changepass">Đổi mật khẩu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Đăng xuất</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <Component {...propsRoute}/>
        </div>
    }}/>
}
