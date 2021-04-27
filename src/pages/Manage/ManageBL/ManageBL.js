import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addBLAction, deleteBLAction, editBLAction } from '../../../redux/actions/DataAction'

export default function ManageBL() {

    let [maBL, setMaBL] = useState("");

    let [data, setData] = useState({
        title: "Thêm biên lai",
        values: {
            maBL: "",
            soTienThanhToan: 0,
            maCH: "",
            thoiGianLap: "",
            tinhTrangBL: "",
            nguoiLap: "",
        },
        mangBL: []
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
    let [dataPrint, setDataPrint] = useState({
        values: {
            maBL: "",
            soTienThanhToan: 0,
            maCH: "",
            tenDC: "",
            thoiGianLap: "",
            tinhTrangBL: "",
            nguoiLap: "",
        }
    })

    let [mangBLSearch, setMangBLSearch] = useState([]);

    let arrInput = document.querySelectorAll('form input, form select');


    const { mangBL,mangDC } = useSelector(state => state.ListReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        setMangBLSearch(mangBL)
    }, [data]);

    const renderListBL = () => {
        return mangBLSearch.map((item, index) => {
            return <tr style={{cursor:"pointer"}} key={index} onClick={() => {selectBL(item.maBL)}}>
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
                        onClick={() => { deleteBL(item.maBL) }}>Xóa</button>
                </td>
            </tr>
        })
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        let newValues = { ...data.values };
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
        if (document.querySelector('#btnThemBL.hidden')) {
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
        if (document.querySelector('#btnCapNhat.hidden')) {
            document.querySelector('#btnCapNhat').classList.remove('hidden');
        }
        document.querySelector('#maBL').disabled = true;

        let editBL = mangBL.find(item => item.maBL === maBL);
        setDataEdit({
            values: editBL
        })

        arrInput.forEach((item) => {
            const { id } = item;
            if (document.getElementById(id)) {
                if (id === "tinhTrangBL") {
                    document.getElementById(id).selectedIndex = 0;
                } else {
                    document.getElementById(id).value = editBL[id];
                }
            }
        })
    }

    const selectBL = (maBL) => {
        setMaBL(maBL)
    }

    const printBL = () => {
        if(maBL){
            const ma = maBL;
            let newValues = mangBL.find(item => item.maBL === ma);
            let danCu = mangDC.find(item => item.maCH == newValues.maCH);
            let hoTenDC = `${danCu.hotenlot} ${danCu.ten}`;
            console.log(hoTenDC)
            setDataPrint({
                values: {...newValues, tenDC:hoTenDC}
            })   
        }
        // console.log('run:',dataPrint.values)
    }

    const handleUpdateBL = () => {
        let bienLai= mangBL.find((item) => item.maBL === dataEdit.values.maBL);
        let editBL = { ...bienLai};
       
        arrInput.forEach(input => {
            const { id, value } = input;
            editBL = { ...editBL, [id]: value };
        })
        dispatch(editBLAction(editBL));

        setData({
            mangBL: mangBL
        });
    }

    // Hàm reset
    const resetFunc = () => {
        arrInput.forEach((item, index) => {
            const { id, value } = item;
            if (id === 'tinhTrangBL') {
                document.getElementById(id).selectedIndex = 0;
            } else {
                document.getElementById(id).value = '';
            }
        });
    }

    const deleteBL = (maBL) => {
        dispatch(deleteBLAction(maBL));

        setData({
            mangBL: mangBL
        });
    }

    const handleAddBL = () => {
        const bienLai = data.values;
        dispatch(addBLAction(bienLai));
        resetFunc();

        setData({
            mangBL: mangBL
        });
    }

    const handleSearch = (event) => {
        let {value} = event.target;
        if(value == "") setMangBLSearch(mangBL);
        else setMangBLSearch(mangBL.filter(bienLai => {
            return bienLai.thoiGianLap.includes(value);
        }));
    }

    const PrintForm = () => {
        if(window.confirm("Bạn có muốn in biên lai không?"))
            alert("In biên lai thanh toán thành công");
    }

    return (
        <div id="content">
            <nav className="navbar navbar-default">
                <NavBar />
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
                                <button className="btn btn-danger ml-3" id="btnThem" data-toggle="modal" data-target="#myModalPrint"
                                    onClick={() => {
                                        printBL()
                                    }}>In biên lai</button>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group">
                                    <input onKeyUp={handleSearch} type="text" className="form-control" placeholder="Thời gian lập" id="searchName" />
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
            <div div className="modal fade" id="myModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <header className="head-form mb-0">
                            <h2 id="header-title">{data.title}</h2>
                        </header>
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
                            <button id="btnDong" type="button" className="btn btn-danger" onClick={closeModal} data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Modal box Print */}
            <div div className="modal fade" id="myModalPrint" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <header className="head-form mb-0">
                            <h2 id="header-title">Bảng xem trước biên lai thanh toán</h2>
                        </header>
                        {/* Modal body */}
                        <div className="modal-body">
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Mã số biên lai: </span>
                                <span class="text-dark">{dataPrint.values.maBL}</span>
                            </p>
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Mã căn hộ: </span>
                                <span class="text-dark">{dataPrint.values.maCH}</span>
                            </p>
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Người ở căn hộ: </span>
                                <span class="text-dark">{dataPrint.values.tenDC}</span>
                            </p>
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Người lập: </span>
                                <span class="text-dark">{dataPrint.values.nguoiLap}</span>
                            </p>
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Ngày lập: </span>
                                <span class="text-dark">{dataPrint.values.thoiGianLap}</span>
                            </p>
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Tình trạng: </span>
                                <span class="text-dark">{dataPrint.values.tinhTrangBL}</span>
                            </p>
                            <p>
                                <span class="text-dark font-weight-bold mr-3">Số tiền thanh toán: </span>
                                <span class="text-dark">{dataPrint.values.soTienThanhToan} VNĐ</span>
                            </p>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer" id="modal-footer">
                            <button id="btnIn" type="button" className="btn btn-success" onClick={PrintForm}>In biên lai</button>
                            <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
