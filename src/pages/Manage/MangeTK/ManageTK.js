import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addCHAction, deleteCHAction, deleteTKAction, editCHAction } from '../../../redux/actions/DataAction'


export default function ManageTK() {

    const {mangTK} = useSelector(state => state.ListReducer)

    let [mangTKSearch, setMangTKSearch] = useState([]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        setMangTKSearch(mangTK)
    }, []);

    const renderListTK = () => {
        return mangTKSearch.map((item,index) => {
            const type = getChucVu(item.type);
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{type}</td>
                <td>
                    <button className="btn btn-danger" 
                    onClick={() => {deleteCH(item.username)}}>Xóa</button>
                </td>
            </tr>
        })
    }

    const getChucVu = (id) => {
        if(id === "1") 
            return "Admin"
        else if (id === "2")
            return "Quản lý căn hộ"
        else if (id === "3")
            return "Quản lý dân cư"
        else if (id === "4")
            return "Quản lý tài sản"
        else if (id === "5")
            return "Quản lý dịch vụ"
        else
            return "Quản lý công nợ"
    }

    const deleteCH = (username) => {
        dispatch(deleteTKAction(username));
    }

    const handleSearch = (event) => {
        let {value} = event.target;
        if(value == "") setMangTKSearch(mangTK);
        else setMangTKSearch(mangTK.filter(taiKhoan => {
            return taiKhoan.username.includes(value);
        }));
    }
 
    return (
        <div id="content">
            <nav className="navbar navbar-default">
                <NavBar/>
            </nav>
            <div className="container">
                <div className="card text-center">
                    {/* Header */}
                    <div className="card-header myCardHeader">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-left text-primary font-weight-bold">Danh sách tài khoản nhân viên</h3>
                            </div>
                            <div className="col-md-6 text-right d-none">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm</button>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group">
                                    <input onKeyUp={handleSearch} type="text" className="form-control" placeholder="Tên username" id="searchName" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-table">
                            <table className="table table-bordered table-hover myTable">
                                <thead className="text-primary">
                                    <tr>
                                        <th className="nowrap">
                                            <span className="mr-1">STT</span>
                                            {/* <i class="fa fa-arrow-up" id="SapXepTang"></i>
                                            <i class="fa fa-arrow-down" id="SapXepGiam"></i> */}
                                        </th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Chức vụ</th>
                                        <th><em className="fa fa-cog" /></th>
                                    </tr>
                                </thead>
                                <tbody id="tableDanhSach">
                                    {renderListTK()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="card-footer myCardFooter">
                        <nav>
                            <ul className="pagination justify-content-center" id="ulPhanTrang">
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
