import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addDVAction, deleteDVAction, editDVAction } from '../../../redux/actions/DataAction'

export default function ManageDV() {

    let [data, setData] = useState({
        title: "Thêm dịch vụ",
        values: {
            maDV: "",
            tenDV: "",
            giaDV: ""
        }
    })
    let [dataEdit, setDataEdit] = useState({
        values: {
            maDV: "",
            tenDV: "",
            giaDV: ""
        }
    })
    let arrInput = document.querySelectorAll('form input, form select');

    const {mangDV} = useSelector(state => state.ListReducer)

    const dispatch = useDispatch();

    const renderListDV = () => {
        return mangDV.map((item,index) => {
            return <tr key={index}>
                <td>{item.maDV}</td>
                <td>{item.tenDV}</td>
                <td>{item.giaDV}</td>
                <td>
                    <button 
                    className="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={() => {
                        editDV(item.maDV)
                    }}
                    >Sửa</button>
                    <button className="btn btn-danger" 
                    onClick={() => {deleteDV(item.maDV)}}>Xóa</button>
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

    const addDV = () => {
        setData({
            title: "Thêm dịch vụ"
        })
        document.querySelector('#btnCapNhat').classList.add('hidden');
        if(document.querySelector('#btnThemDV.hidden')){
            document.querySelector('#btnThemDV').classList.remove('hidden');
        }
        document.querySelector('#maDV').disabled = false;
    
    }

    const closeModal = () => {
        resetFunc();
    }

    const editDV = (maDV) => {
        setData({
            title: "Chỉnh sửa dịch vụ"
        })
        document.querySelector('#btnThemDV').classList.add('hidden');
        if(document.querySelector('#btnCapNhat.hidden')){
            document.querySelector('#btnCapNhat').classList.remove('hidden');
        }
        document.querySelector('#maDV').disabled = true;

        let editDV = mangDV.find(item => item.maDV === maDV);
        setDataEdit({
            values: editDV
        })

        arrInput.forEach((item) => {
            const {id} = item;
            if(document.getElementById(id)) {
                if(id === "tinhTrangDV"){
                    document.getElementById(id).selectedIndex = 0;
                }else{
                    document.getElementById(id).value = editDV[id];
                }
            }
        })
    }

    const handleUpdateDV = () => {
        let index = mangDV.findIndex((item) => item.maDV === dataEdit.values.maDV);
        let editDV = {...mangDV[index]};
        console.log(editDV);
        arrInput.forEach(input => {
            const {id,value} = input;
            editDV = {...editDV,[id]:value};
        })
        dispatch(editDVAction(editDV));
    }

    // Hàm reset
    const resetFunc = () => {
        arrInput.forEach((item,index) => {
            const {id,value} = item;
            if(id === 'tinhTrangDV'){
                document.getElementById(id).selectedIndex = 0;
            }else{
                document.getElementById(id).value = '';
            }
        });
    }

    const deleteDV = (maDV) => {
        dispatch(deleteDVAction(maDV));
    }
      
    const handleAddDV = () => {
        const dichVu = data.values;
        dispatch(addDVAction(dichVu));

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
                                <h3 className="text-left text-primary font-weight-bold">Danh sách dịch vụ</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal"
                                onClick={() => {
                                    addDV()
                                }}>Thêm dịch vụ</button>
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
                                        <span className="input-group-text"><i className="fa fa-circle" /></span>
                                    </div>
                                    <input type="text" name="maDV" id="maDV" onChange={handleChange} className="form-control input-sm" placeholder="Mã dịch vụ" />
                                </div>
                                <span className="sp-thongbao" id="tbMaDV" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user" /></span>
                                    </div>
                                    <input type="text" name="tenDV" id="tenDV" onChange={handleChange} className="form-control input-sm" placeholder="Tên dịch vụ" />
                                </div>
                                <span className="sp-thongbao" id="tbNameDV" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-money-bill-wave"></i></span>
                                    </div>
                                    <input type="text" name="giaDV" id="giaDV" onChange={handleChange} className="form-control input-sm" placeholder="Giá dịch vụ" />
                                </div>
                                <span className="sp-thongbao" id="tbPriceDV" />
                            </div>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemDV" type="button" className="btn btn-success" onClick={handleAddDV}>Thêm</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success" onClick={handleUpdateDV}>Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" onClick={closeModal}  data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
