import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'

export default function ManageDV() {

    const {mangDV} = useSelector(state => state.ListReducer)

    const renderListDV = () => {
        return mangDV.map((item,index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{item.tenDV}</td>
                <td>{item.giaDV}</td>
                <td>
                    <button 
                    className="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#myModal"
                    >Sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        })
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
                                <h3 className="text-left text-primary font-weight-bold">Danh sách dịch vụ</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm dịch vụ</button>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tên nhân viên" id="searchName" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered table-hover myTable">
                            <thead className="text-primary">
                                <tr>
                                    <th className="nowrap">
                                        <span className="mr-1">Mã dịch vụ</span>
                                        {/* <i class="fa fa-arrow-up" id="SapXepTang"></i>
										<i class="fa fa-arrow-down" id="SapXepGiam"></i> */}
                                    </th>
                                    <th>Tên dịch vụ</th>
                                    <th>Giá</th>
                                    <th><em className="fa fa-cog" /></th>
                                </tr>
                            </thead>
                            <tbody id="tableDanhSach">
                                {renderListDV()}
                            </tbody>
                        </table>
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
