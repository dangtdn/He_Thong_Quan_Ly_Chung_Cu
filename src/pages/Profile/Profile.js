import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'

export default function Profile() {
    return (
        <div id="content">
            <nav className="navbar navbar-default">
                <NavBar />
            </nav>
            <div className="container">
                <div className="box-profile px-3 px-md-5 py-4 shadow">
                    <h3 className="text-center my-3">THÔNG TIN NHÂN VIÊN</h3>
                    <form className="w-100 p-0 m-0 shadow-none" style={{background:"none"}}>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputName">
                                Họ tên:
                                    </label>
                            <input className="form-control col-lg-10" type="text" name="inputName" id="inputName" placeholder="Nhập họ tên nhân viên..." />
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputMaSV">
                                Mã số:
                                    </label>
                            <input disabled className="form-control col-lg-10" type="text" name="inputMaSV" id="inputMaSV" placeholder="Nhập mã số nhân viên..." value="NV001"/>
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputName">
                                Email:
                                    </label>
                            <input className="form-control col-lg-10" type="text" name="inputName" id="inputName" placeholder="Nhập email nhân viên..." />
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputName">
                                SĐT:
                                    </label>
                            <input className="form-control col-lg-10" type="text" name="inputName" id="inputName" placeholder="Nhập số điện thoại..." />
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputName">
                                Chức vụ:
                                    </label>
                            <input className="form-control col-lg-10" type="text" name="inputName" id="inputName" placeholder="Nhập chức vụ..." />
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputName">
                                Địa chỉ:
                                    </label>
                            <input className="form-control col-lg-10" type="text" name="inputName" id="inputName" placeholder="Nhập địa chỉ..." />
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <div className="col-lg-2">
                                <input className=" d-none" type="text" name id />
                            </div>
                            <div className="col-lg-10 pl-0">
                                <input type="checkbox" className="form-input w-0 h-0 mr-3" id="inputCheck" />
                                <label className="form-label" htmlFor="inputCheck">Xác nhận thông tin</label>
                            </div>
                        </div>
                        <div className="btn-update d-flex justify-content-center">
                            <button className="btn btn-primary px-4">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
