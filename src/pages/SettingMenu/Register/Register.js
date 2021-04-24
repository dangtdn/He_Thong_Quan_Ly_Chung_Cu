import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { DangKyAction } from '../../../redux/actions/NguoiDungAction';

export default function Register() {

    let [dataRegister, setDataRegister] = useState({
        values: {
            username: "",
            password: "",
            type: "",
        }
    })

    const dispatch = useDispatch();

    const handleChange = (event) => {
        let {value, name} = event.target;

        let newValues = {...dataRegister.values};
        newValues[name] = value;

        setDataRegister({
            values: newValues
        })
        console.log(newValues);
    }

    const registerUser = (event) => {
        event.preventDefault();

        const userTK = {...dataRegister.values};

        dispatch(DangKyAction(userTK))
    }

    return (
        <div id="content">
            <nav className="navbar navbar-default">
                <NavBar/>
            </nav>
            <div className="container">
                <div className="box-profile px-3 px-md-5 py-4 shadow">
                    <h3 className="text-center my-3">ĐĂNG KÝ TÀI KHOẢN</h3>
                    <form onSubmit={registerUser} className="w-100 p-0 m-0 shadow-none" style={{background:"none"}}>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputName">
                                Username:
                                    </label>
                            <input onChange={handleChange} className="form-control col-lg-10" type="text" name="username" id="username" placeholder="Nhập username" />
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputMaSV">
                                Password 1:
                                    </label>
                            <input onChange={handleChange} className="form-control col-lg-10" type="password" name="password" id="password1" placeholder="Nhập password"/>
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <label className="col-lg-2 col-form-label" htmlFor="inputMaSV">
                                Password 2:
                                    </label>
                            <input className="form-control col-lg-10" type="password" name="password2" id="password2" placeholder="Nhập lại pasword"/>
                        </div>
                        <div className="form-group row px-3 px-lg-5">
                            <div className="col-lg-2">
                                <input className=" d-none" type="text" name id />
                            </div>
                            <div className="col-lg-10 px-0">
                                <select onChange={handleChange} className="form-control" name="type" onChange={handleChange} id="tinhTrangCH">
                                            <option value="">Chọn chức vụ</option>
                                            <option value="1">admin</option>
                                            <option value="2"> Quản lý căn hộ</option>
                                            <option value="3"> Quản lý dân cư</option>
                                            <option value="4"> Quản lý tài sản</option>
                                            <option value="5"> Quản lý dịch vụ</option>
                                            <option value="6"> Quản lý biên lai</option>
                                </select>
                            </div>
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
                            <button className="btn btn-primary px-4">Tạo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
