import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addDCAction, deleteDCAction, editDCAction } from '../../../redux/actions/DataAction'

export default function ManageDC() {

    let [data, setData] = useState({
        title: "Thêm dân cư",
        values: {
            maDC: "",
            hotenlot: "",
            ten: "",
            ngaySinh: "",
            gioiTinh: "",
            cmnd: "",
            sdt: "",
            ngayChuyenVao: "",
            maCH: "",
        }
    })

    const {mangDC} = useSelector(state => state.ListReducer)

    const dispatch = useDispatch();

    const renderListDC = () => {
        return mangDC.map((item,index) => {
            return <tr key={index}>
                <td>{item.maDC}</td>
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
                    onClick={() => {
                        editDC(item.maDC)
                    }}
                    >Sửa</button>
                    <button className="btn btn-danger"
                    onClick={() => {deleteDC(item.maDC)}}>Xóa</button>
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

    const addDC = () => {
        setData({
            title: "Thêm dân cư"
        })
        document.querySelector('#btnCapNhat').classList.add('hidden');
        if(document.querySelector('#btnThemDC.hidden')){
            document.querySelector('#btnThemDC').classList.remove('hidden');
        }
        document.querySelector('#maDC').disabled = false;
        
        document.querySelectorAll('.modal-body input').forEach(item => {
            item.value = "";
        })
    }

    const editDC = (maDC) => {
        setData({
            title: "Chỉnh sửa dân cư"
        })
        document.querySelector('#btnThemDC').classList.add('hidden');
        if(document.querySelector('#btnCapNhat.hidden')){
            document.querySelector('#btnCapNhat').classList.remove('hidden');
        }
        document.querySelector('#maDC').disabled = true;

        let index = mangDC.findIndex(item => item.maDC === maDC);

        document.querySelector('#maDC').value = mangDC[index].maDC;
        document.querySelector('#hotenlot').value = mangDC[index].hotenlot;
        document.querySelector('#ten').value = mangDC[index].ten;
        document.querySelector('#ngaySinh').value = mangDC[index].ngaySinh;
        document.querySelector('#gioiTinh').value = mangDC[index].gioiTinh;
        document.querySelector('#cmnd').value = mangDC[index].cmnd;
        document.querySelector('#sdt').value = mangDC[index].sdt;
        document.querySelector('#ngayChuyenVao').value = mangDC[index].ngayChuyenVao;
        document.querySelector('#maCH').value = mangDC[index].maCH;

    }

    const handleUpdateDC = () => {
        dispatch(editDCAction(data.values))
    }

    const deleteDC = (maDC) => {
        dispatch(deleteDCAction(maDC));
    }
      
    const handleAddDC = () => {
        const danCu = data.values;
        dispatch(addDCAction(danCu));

        document.querySelectorAll(".modal-body input[type='text']").forEach(item => {
            item.value = "";
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
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal"
                                onClick={() => {
                                    addDC()
                                }}>Thêm dân cư</button>
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
                                        <span className="input-group-text"><i className="fa fa-user" /></span>
                                    </div>
                                    <input type="text" name="maDC" id="maDC" onChange={handleChange} className="form-control input-sm" placeholder="Mã dân cư" />
                                </div>
                                <span className="sp-thongbao" id="tbHoTenLot" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user" /></span>
                                    </div>
                                    <input type="text" name="hotenlot" id="hotenlot" onChange={handleChange} className="form-control input-sm" placeholder="Họ tên lót" />
                                </div>
                                <span className="sp-thongbao" id="tbHoTenLot" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                    </div>
                                    <input type="text" name="ten" id="ten" onChange={handleChange} className="form-control input-sm" placeholder="Tên" />
                                </div>
                                <span className="sp-thongbao" id="tbNamDC" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input type="text" name="ngaySinh" id="ngaySinh" onChange={handleChange} className="form-control input-sm" placeholder="Ngày sinh" />
                                </div>
                                <span className="sp-thongbao" id="tbBirth" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-transgender"></i></span>
                                    </div>
                                    <label className="radio mx-3 mb-0 mt-1"><input onChange={handleChange} type="radio" name="gioiTinh" id="gioiTinh" value="Nam"/>Nam</label>
                                    <label className="radio mb-0 mt-1"><input onChange={handleChange} type="radio" name="gioiTinh" id="gioiTinh" value="Nữ"/>Nữ</label>
                                </div>
                                <span className="sp-thongbao" id="tbGender" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-address-card"></i></span>
                                    </div>
                                    <input type="text" name="cmnd" id="cmnd" onChange={handleChange} className="form-control" placeholder="Chứng minh nhân dân" />
                                </div>
                                <span className="sp-thongbao" id="tbCMND" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-phone"></i></span>
                                    </div>
                                    <input type="text" name="sdt" id="sdt" onChange={handleChange} className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <span className="sp-thongbao" id="tbSDT" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input type="text" name="ngayChuyenVao" id="ngayChuyenVao" onChange={handleChange} className="form-control" placeholder="Ngày chuyển vào" />
                                </div>
                                <span className="sp-thongbao" id="tbNgayChuyen" />
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
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemDC" type="button" className="btn btn-success" onClick={handleAddDC}>Thêm</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success" onClick={handleUpdateDC}>Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
