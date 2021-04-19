import React, { Fragment } from 'react'

export default function SideBar() {
    return (
        <Fragment>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Apartment Manager</h3>
                    <strong>AM</strong>
                </div>
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#">
                            <i className="fas fa-home" />
          Home
        </a>
                    </li>
                    <li>
                        <a href="#profileSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-user-circle" />
          Hồ sơ
        </a>
                        <ul className="collapse list-unstyled" id="profileSubmenu">
                            <li>
                                <a href="#">Thông tin</a>
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
                                <a href="#">Quản lý căn hộ</a>
                            </li>
                            <li>
                                <a href="#">Quản lý dân cư</a>
                            </li>
                            <li>
                                <a href="#">Quản lý tài sản</a>
                            </li>
                            <li>
                                <a href="#">Quản lý công nợ</a>
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
                                <a href="#">Đăng ký tài khoản</a>
                            </li>
                            <li>
                                <a href="#">Đổi mật khẩu</a>
                            </li>
                            <li>
                                <a href="#">Đăng xuất</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Fragment>

    )
}
