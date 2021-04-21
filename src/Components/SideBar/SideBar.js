import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../App';

export default function SideBar() {

    const logOut = () => {
        localStorage.clear();
        history.push('/')
    }

    return (
        <Fragment>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Apartment Manager</h3>
                    <strong>AM</strong>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <NavLink to="/">
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
                                <NavLink to="/canho">Căn hộ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dancu">Dân cư</NavLink>
                            </li>
                            <li>
                                <NavLink to="/taisan">Tài sản</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dichvu">Dịch vụ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/bienlai">Biên lai</NavLink>
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
                                <NavLink to="/register">Đăng ký tài khoản</NavLink>
                            </li>
                            <li>
                                <NavLink to="/changepass">Đổi mật khẩu</NavLink>
                            </li>
                            <li>
                                <a href="" onClick={logOut}>Đăng xuất</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Fragment>

    )
}
