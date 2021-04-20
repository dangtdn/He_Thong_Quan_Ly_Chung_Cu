import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'

export default function ManageDC() {

    const {mangDC} = useSelector(state => state.ListReducer)

    const renderListDC = () => {
        return mangDC.map((item,index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{item.hotenlot}</td>
                <td>{item.ten}</td>
                <td>{item.ngaySinh}</td>
                <td>{item.gioiTinh}</td>
                <td>{item.cmnd}</td>
                <td>{item.sdt}</td>
                <td>{item.ngayChuyenVao}</td>
                <td>{item.maCH}</td>
                <td>
                    <button 
                    className="btn btn-info mb-1"
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
                                <h3 className="text-left text-primary font-weight-bold">Danh sách dân cư</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm dân cư</button>
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
                        <div className="box-table">
                            <table className="table table-bordered table-hover myTable">
                                <thead className="text-primary">
                                    <tr>
                                        <th className="nowrap">
                                            <span className="mr-1">Mã dân cư</span>
                                            {/* <i class="fa fa-arrow-up" id="SapXepTang"></i>
                                            <i class="fa fa-arrow-down" id="SapXepGiam"></i> */}
                                        </th>
                                        <th>Họ tên lót</th>
                                        <th>Tên</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>CMND</th>
                                        <th>SĐT</th>
                                        <th>Ngày chuyển vào</th>
                                        <th>Mã căn hộ</th>
                                        <th><em className="fa fa-cog" /></th>
                                    </tr>
                                </thead>
                                <tbody id="tableDanhSach">
                                    {renderListDC()}
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
            {/* Modal box */}
            <div div className = "modal fade" id = "myModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <header className="head-form mb-0">
                        <h2 id="header-title">Thêm dân cư</h2>
                    </header>
                    {/* Modal Header */}
                    {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                    {/* Modal body */}
                    <div className="modal-body">
                        <form role="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user" /></span>
                                    </div>
                                    <input type="hotenlot" name="hotenlot" id="hotenlot" className="form-control input-sm" placeholder="Họ tên lót dân cư" />
                                </div>
                                <span className="sp-thongbao" id="tbHoTenLot" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                    </div>
                                    <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Tên dân cư" />
                                </div>
                                <span className="sp-thongbao" id="tbTen" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                    </div>
                                    <input type="birth" name="birth" id="birth" className="form-control input-sm" placeholder="Ngày sinh" />
                                </div>
                                <span className="sp-thongbao" id="tbBirth" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-key" /></span>
                                    </div>
                                    <label className="radio mx-3 mb-0 mt-1"><input type="radio" name="gender" checked />Nam</label>
                                    <label className="radio mb-0 mt-1"><input type="radio" name="gender" />Nữ</label>
                                </div>
                                <span className="sp-thongbao" id="tbGender" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input type="text" name="cmnd" id="cmnd" className="form-control" placeholder="Chứng minh nhân dân" />
                                </div>
                                <span className="sp-thongbao" id="tbCMND" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <span className="sp-thongbao" id="tbNgay" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày làm" />
                                </div>
                                <span className="sp-thongbao" id="tbNgay" />
                            </div>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemNV" type="button" className="btn btn-success">Thêm người dùng</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
