import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';

export default function Home() {

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
                                <h3 className="text-left text-primary font-weight-bold">Danh sách nhân viên</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm nhân viên</button>
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
                                        <span className="mr-1">Mã căn hộ</span>
                                        {/* <i class="fa fa-arrow-up" id="SapXepTang"></i>
										<i class="fa fa-arrow-down" id="SapXepGiam"></i> */}
                                    </th>
                                    <th>Tên căn hộ</th>
                                    <th>Giá</th>
                                    <th>Tình trạng</th>
                                    <th><em className="fa fa-cog" /></th>
                                </tr>
                            </thead>
                            <tbody id="tableDanhSach">
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
