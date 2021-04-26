import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addCHAction, deleteCHAction, editCHAction } from '../../../redux/actions/DataAction'

function ManageCH(props) {

    let [data, setData] = useState({
        title: "Thêm căn hộ",
        values: {
            maCH: "",
            tenCH: "",
            giaCH: "",
            tinhTrangCH: "",
        }
    })
    let [dataEdit, setDataEdit] = useState({
        values: {
            maCH: "",
            tenCH: "",
            giaCH: "",
            tinhTrangCH: "",
        }
    })
    
    let arrInput = document.querySelectorAll('form input, form select');

    const {mangCH} = useSelector(state => state.ListReducer)
    // console.log(mangCH);
    const dispatch = useDispatch();

    const renderListCH = () => {
        return mangCH.map((item,index) => {
            return <tr key={index}>
                <td>{item.maCH}</td>
                <td>{item.tenCH}</td>
                <td>{item.giaCH}</td>
                <td>{item.tinhTrangCH}</td>
                <td>
                    <button 
                    className="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={() => {
                        editCH(item.maCH)
                    }}
                    >Sửa</button>
                    <button className="btn btn-danger" 
                    onClick={() => {deleteCH(item.maCH)}}>Xóa</button>
                </td>
            </tr>
        })
    }

    const handleChange = (event) => {
        const {value, name} = event.target;

        let newValues = {...data.values};
        newValues[name] = value;

        setData({
            values: newValues
        })
    }

    const addCH = () => {
        setData({
            title: "Thêm căn hộ"
        })
        document.querySelector('#btnCapNhat').classList.add('hidden');
        if(document.querySelector('#btnThemCH.hidden')){
            document.querySelector('#btnThemCH').classList.remove('hidden');
        }
        document.querySelector('#maCH').disabled = false;
        
    }

    const closeModal = () => {
        resetFunc();
    }

    const editCH = (maCH) => {
        setData({
            title: "Chỉnh sửa căn hộ"
        })
        document.querySelector('#btnThemCH').classList.add('hidden');
        if(document.querySelector('#btnCapNhat.hidden')){
            document.querySelector('#btnCapNhat').classList.remove('hidden');
        }
        document.querySelector('#maCH').disabled = true;

        let editCH = mangCH.find(item => item.maCH === maCH);
        setDataEdit({
            values: editCH
        })

        arrInput.forEach((item) => {
            const {id} = item;
            if(document.getElementById(id)) {
                if(id === "tinhTrangCH"){
                    document.getElementById(id).selectedIndex = 0;
                }else{
                    document.getElementById(id).value = editCH[id];
                }
            }
        })
    }

    const handleUpdateCH = () => {
        let index = mangCH.findIndex((item) => item.maCH === dataEdit.values.maCH);
        let editCH = {...mangCH[index]};
        console.log(editCH);
        arrInput.forEach(input => {
            const {id,value} = input;
            editCH = {...editCH,[id]:value};
        })
        dispatch(editCHAction(editCH));
    }

    // Hàm reset
    const resetFunc = () => {
        arrInput.forEach((item,index) => {
            const {id,value} = item;
            if(id === 'tinhTrangCH'){
                document.getElementById(id).selectedIndex = 0;
            }else{
                document.getElementById(id).value = '';
            }
        });
    }

    const deleteCH = (maCH) => {
        dispatch(deleteCHAction(maCH));
    }
      
    const handleAddCH = () => {
        const canHo = {...data.values};
        dispatch(addCHAction(canHo));
        resetFunc();
    }

    const handleSearch = (event) => {
        let {value} = event.target;
        let mangCHSearch = mangCH.filter(canHo => {
            return canHo.tenCH.includes(value);
        });
        console.log(mangCHSearch)
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
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal"
                                onClick={addCH}>Thêm căn hộ</button>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group">
                                    <input onChange={handleSearch} type="text" className="form-control" placeholder="Tên căn hộ" id="searchName" />
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
                        <h2 id="header-title">{data.title}</h2>
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
                                        <span className="input-group-text"><i class="fa fa-circle"></i></span>
                                    </div>
                                    <input type="text" name="maCH" id="maCH" onChange={handleChange} className="form-control input-sm" placeholder="Mã căn hộ" />
                                </div>
                                <span className="sp-thongbao" id="tbMaCH" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-hotel"></i></span>
                                    </div>
                                    <input type="name" name="tenCH" id="tenCH" onChange={handleChange} className="form-control input-sm" placeholder="Tên căn hộ" />
                                </div>
                                <span className="sp-thongbao" id="tbNameCH" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-money-bill-wave"></i></span>
                                    </div>
                                    <input type="price" name="giaCH" id="giaCH" onChange={handleChange} className="form-control input-sm" placeholder="Giá căn hộ" />
                                </div>
                                <span className="sp-thongbao" id="tbPriceCH" />
                            </div>
                           <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-clipboard-list"></i></span>
                                    </div>
                                    <select className="form-control" name="tinhTrangCH" onChange={handleChange} id="tinhTrangCH">
                                        <option value="">Chọn tình trạng</option>
                                        <option value="Đã bán">Đã bán</option>
                                        <option value="Còn trống">Còn trống</option>
                                        <option value="Cho thuê">Cho thuê</option>
                                        <option value="Trả góp">Trả góp</option>
                                    </select>
                                </div>
                                <span className="sp-thongbao" id="tbTinhTrangCH" />
                            </div>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemCH" type="button" className="btn btn-success" onClick={handleAddCH}>Thêm</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success" onClick={handleUpdateCH}>Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" onClick={closeModal} data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ManageCH;