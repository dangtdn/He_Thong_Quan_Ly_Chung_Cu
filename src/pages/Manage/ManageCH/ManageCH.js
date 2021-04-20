import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import Modal from '../../../Components/Modal/Modal'
import NavBar from '../../../Components/NavBar/NavBar'

export default function ManageCH(props) {

    const {mangCH} = useSelector(state => state.ListReducer)

    const renderListCH = () => {
        return mangCH.map((item,index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{item.tenCH}</td>
                <td>{item.gia}</td>
                <td>{item.tinhTrang}</td>
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
                                <h3 className="text-left text-primary font-weight-bold">Danh sách căn hộ</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm căn hộ</button>
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
                                    {renderListCH()}
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
                        <h2 id="header-title">Thêm căn hộ</h2>
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
                                        <span className="input-group-text"><i class="fa fa-hotel"></i></span>
                                    </div>
                                    <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Tên căn hộ" />
                                </div>
                                <span className="sp-thongbao" id="tbTen" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-money-bill-wave"></i></span>
                                    </div>
                                    <input type="price" name="price" id="price" className="form-control input-sm" placeholder="Giá căn hộ" />
                                </div>
                                <span className="sp-thongbao" id="tbEmail" />
                            </div>
                           <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fab fa-stripe-s"></i></span>
                                    </div>
                                    <select className="form-control" id="tinhtrang">
                                        <option>Chọn tình trạng</option>
                                        <option value="1">Đã bán</option>
                                        <option value="2">Còn trống</option>
                                        <option value="3">Cho thuê</option>
                                        <option value="4">Trả góp</option>
                                    </select>
                                </div>
                                <span className="sp-thongbao" id="tbChucVu" />
                            </div>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemNV" type="button" className="btn btn-success">Thêm</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
