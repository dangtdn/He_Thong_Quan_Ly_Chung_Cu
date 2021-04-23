import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addBLAction, deleteBLAction, editBLAction } from '../../../redux/actions/DataAction'

export default function ManageBL() {

    let [data, setData] = useState({
        title: "Thêm biên lai",
        values: {
            maBL: "",
            soTienThanhToan: 0,
            maCH: "",
            thoiGianLap: "",
            tinhTrangBL: "",
            nguoiLap: "",
        }
    })
    let [dataEdit, setDataEdit] = useState({
        values: {
            maBL: "",
            soTienThanhToan: 0,
            maCH: "",
            thoiGianLap: "",
            tinhTrangBL: "",
            nguoiLap: "",
        }
    })
    let arrInput = document.querySelectorAll('form input, form select');


    const {mangBL} = useSelector(state => state.ListReducer)

    const dispatch = useDispatch();

    const renderListBL = () => {
        return mangBL.map((item,index) => {
            return <tr key={index}>
                <td>{item.maBL}</td>
                <td>{item.soTienThanhToan}</td>
                <td>{item.maCH}</td>
                <td>{item.thoiGianLap}</td>
                <td>{item.tinhTrangBL}</td>
                <td>{item.nguoiLap}</td>
                <td>
                    <button 
                    className="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={() => {
                        editBL(item.maBL)
                    }}
                    >Sửa</button>
                    <button className="btn btn-danger"
                    onClick={() => {deleteBL(item.maBL)}}>Xóa</button>
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

    const addBL = () => {
        setData({
            title: "Thêm biên lai"
        })
        document.querySelector('#btnCapNhat').classList.add('hidden');
        if(document.querySelector('#btnThemBL.hidden')){
            document.querySelector('#btnThemBL').classList.remove('hidden');
        }
        document.querySelector('#maBL').disabled = false;
    
    }

    const closeModal = () => {
        resetFunc();
    }

    const editBL = (maBL) => {
        setData({
            title: "Chỉnh sửa biên lai"
        })
        document.querySelector('#btnThemBL').classList.add('hidden');
        if(document.querySelector('#btnCapNhat.hidden')){
            document.querySelector('#btnCapNhat').classList.remove('hidden');
        }
        document.querySelector('#maBL').disabled = true;

        let editBL = mangBL.find(item => item.maBL === maBL);
        setDataEdit({
            values: editBL
        })

        arrInput.forEach((item) => {
            const {id} = item;
            if(document.getElementById(id)) {
                if(id === "tinhTrangBL"){
                    document.getElementById(id).selectedIndex = 0;
                }else{
                    document.getElementById(id).value = editBL[id];
                }
            }
        })
    }

    const handleUpdateBL = () => {
        let index = mangBL.findIndex((item) => item.maBL === dataEdit.values.maBL);
        let editBL = {...mangBL[index]};
        console.log(editBL);
        arrInput.forEach(input => {
            const {id,value} = input;
            editBL = {...editBL,[id]:value};
        })
        dispatch(editBLAction(editBL));
    }

    // Hàm reset
    const resetFunc = () => {
        arrInput.forEach((item,index) => {
            const {id,value} = item;
            if(id === 'tinhTrangBL'){
                document.getElementById(id).selectedIndex = 0;
            }else{
                document.getElementById(id).value = '';
            }
        });
    }

    const deleteBL = (maBL) => {
        dispatch(deleteBLAction(maBL));
    }
      
    const handleAddBL = () => {
        const bienLai = data.values;
        dispatch(addBLAction(bienLai));
        resetFunc();
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
                              <h3 className="text-left text-primary font-weight-bold">Danh sách biên lai thanh toán</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal"
                                onClick={() => {
                                    addBL()
                                }}>Thêm biên lai</button>
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
                                            <span className="mr-1">Mã biên lai</span>
                                            {/* <i class="fa fa-arrow-up" id="SapXepTang"></i>
                                            <i class="fa fa-arrow-down" id="SapXepGiam"></i> */}
                                        </th>
                                        <th>Số tiền thanh toán</th>
                                        <th>Mã căn hộ</th>
                                        <th>Thời gian lập</th>
                                        <th>Tình trạng</th>
                                        <th>Người lập</th>
                                        <th><em className="fa fa-cog" /></th>
                                    </tr>
                                </thead>
                                <tbody id="tableDanhSach">
                                    {renderListBL()}
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
                                        <span className="input-group-text"><i class="fa fa-money-bill-wave"></i></span>
                                    </div>
                                    <input type="text" name="maBL" id="maBL" onChange={handleChange} className="form-control input-sm" placeholder="Mã biên lai" />
                                </div>
                                <span className="sp-thongbao" id="tbMaBL" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-money-bill-wave"></i></span>
                                    </div>
                                    <input type="text" name="soTienThanhToan" id="soTienThanhToan" onChange={handleChange} className="form-control input-sm" placeholder="Số tiền thanh toán" />
                                </div>
                                <span className="sp-thongbao" id="tbSoTienThanhToan" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-circle"></i></span>
                                    </div>
                                    <input type="text" name="maCH" id="maCH" onChange={handleChange} className="form-control" placeholder="Mã căn hộ" />
                                </div>
                                <span className="sp-thongbao" id="tbMaCH" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input type="text" name="thoiGianLap" id="thoiGianLap" onChange={handleChange} className="form-control" placeholder="Ngày lập" />
                                </div>
                                <span className="sp-thongbao" id="tbThoiGianLap" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-clipboard-list"></i></span>
                                    </div>
                                    <select className="form-control" id="tinhTrangBL" onChange={handleChange} name="tinhTrangBL">
                                        <option>Chọn tình trạng</option>
                                        <option value="Hoàn tất">Hoàn tất</option>
                                        <option value="Chưa thanh toán">Chưa thanh toán</option>
                                    </select>
                                </div>
                                <span className="sp-thongbao" id="tbTinhTrangBL" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user" /></span>
                                    </div>
                                    <input type="text" name="nguoiLap" id="nguoiLap" onChange={handleChange} className="form-control input-sm" placeholder="Người lập" />
                                </div>
                                <span className="sp-thongbao" id="tbNguoiLap" />
                            </div>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemBL" type="button" className="btn btn-success" onClick={handleAddBL}>Thêm</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success" onClick={handleUpdateBL}>Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" onClick={closeModal}  data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
