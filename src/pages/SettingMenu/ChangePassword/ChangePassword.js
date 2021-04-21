import React from 'react'
import NavBar from '../../../Components/NavBar/NavBar'

export default function ChangePassword() {
    return (
        <div id="content">
            <nav className="navbar navbar-default">
                <NavBar/>
            </nav>
            <div className="container">
                <div className="box-profile px-3 px-md-5 py-4 shadow">
                    <h3 className="text-center my-3">THAY ĐỔI MẬT KHẨU</h3>
                    <form className="w-100 p-0 m-0 shadow-none" style={{background:"none"}}>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-3 col-form-label" htmlFor="inputName">
                                Password:
                                    </label>
                            <input className="form-control col-lg-9" type="password" name="username" id="username" value="123456" disabled/>
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-3 col-form-label" htmlFor="inputMaSV">
                                New password 1:
                                    </label>
                            <input className="form-control col-lg-9" type="password" name="password1" id="password1" placeholder="Nhập password mới..."/>
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-3 col-form-label" htmlFor="inputMaSV">
                                 New password 2:
                                    </label>
                            <input className="form-control col-lg-9" type="password" name="password2" id="password2" placeholder="Nhập lại pasword mới..."/>
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <div className="col-lg-3">
                                <input className=" d-none" type="text" name id />
                            </div>
                            <div className="col-lg-9 pl-0">
                                <input type="checkbox" className="form-input w-0 h-0 mr-3" id="inputCheck" />
                                <label className="form-label" htmlFor="inputCheck">Xác nhận thông tin</label>
                            </div>
                        </div>
                        <div className="btn-update d-flex justify-content-center">
                            <button className="btn btn-primary px-4">Xác nhận</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
