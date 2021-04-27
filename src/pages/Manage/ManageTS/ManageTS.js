import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../../../Components/NavBar/NavBar'
import { addTSAction, deleteTSAction, editTSAction } from '../../../redux/actions/DataAction'

export default function ManageTS() {

    let [data, setData] = useState({
        title: "Thêm tài sản",
        values: {
            maTS: "",
            tenTS: "",
            giaTS: "",
            tinhTrangTS: "",
        }
    })
    let [dataEdit, setDataEdit] = useState({
        values: {
            maTS: "",
            tenTS: "",
            giaTS: "",
            tinhTrangTS: "",
        }
    })

    let [mangTSSearch, setMangTSSearch] = useState([]);
    
    let arrInput = document.querySelectorAll('form input, form select');


    const {mangTS} = useSelector(state => state.ListReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        setMangTSSearch(mangTS)
    }, []);

    const renderListTS = () => {
        return mangTSSearch.map((item,index) => {
            return <tr key={index}>
                <td>{item.maTS}</td>
                <td>{item.tenTS}</td>
                <td>{item.giaTS}</td>
                <td>{item.tinhTrangTS}</td>
                <td>
                    <button 
                    className="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={() => {
                        editTS(item.maTS)
                    }}
                    >Sửa</button>
                    <button className="btn btn-danger" 
                    onClick={() => {deleteTS(item.maTS)}}>Xóa</button>
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

    const addTS = () => {
        setData({
            title: "Thêm tài sản"
        })
        document.querySelector('#btnCapNhat').classList.add('hidden');
        if(document.querySelector('#btnThemTS.hidden')){
            document.querySelector('#btnThemTS').classList.remove('hidden');
        }
        document.querySelector('#maTS').disabled = false;
    
    }

    const closeModal = () => {
        resetFunc();
    }

    const editTS = (maTS) => {
        setData({
            title: "Chỉnh sửa tài sản"
        })
        document.querySelector('#btnThemTS').classList.add('hidden');
        if(document.querySelector('#btnCapNhat.hidden')){
            document.querySelector('#btnCapNhat').classList.remove('hidden');
        }
        document.querySelector('#maTS').disabled = true;

        let editTS = mangTS.find(item => item.maTS === maTS);
        setDataEdit({
            values: editTS
        })

        arrInput.forEach((item) => {
            const {id} = item;
            if(document.getElementById(id)) {
                if(id === "tinhTrangTS"){
                    document.getElementById(id).selectedIndex = 0;
                }else{
                    document.getElementById(id).value = editTS[id];
                }
            }
        })
    }

    const handleUpdateTS = () => {
        let index = mangTS.findIndex((item) => item.maTS === dataEdit.values.maTS);
        let editTS = {...mangTS[index]};
        console.log(editTS);
        arrInput.forEach(input => {
            const {id,value} = input;
            editTS = {...editTS,[id]:value};
        })
        dispatch(editTSAction(editTS));
    }

    // Hàm reset
    const resetFunc = () => {
        arrInput.forEach((item,index) => {
            const {id,value} = item;
            if(id === 'tinhTrangTS'){
                document.getElementById(id).selectedIndex = 0;
            }else{
                document.getElementById(id).value = '';
            }
        });
    }

    const deleteTS = (maTS) => {
        dispatch(deleteTSAction(maTS));
    }
      
    const handleAddTS = () => {
        const taiSan = data.values;
        dispatch(addTSAction(taiSan));

        resetFunc();
    }

    const handleSearch = (event) => {
        let {value} = event.target;
        if(value == "") setMangTSSearch(mangTS);
        else setMangTSSearch(mangTS.filter(taiSan => {
            return taiSan.tenTS.includes(value);
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
                                <h3 className="text-left text-primary font-weight-bold">Danh sách tài sản</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal"
                                onClick={() => {
                                    addTS()
                                }}>Thêm tài sản</button>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group">
                                    <input onKeyUp={handleSearch} type="text" className="form-control" placeholder="Tên tài sản" id="searchName" />
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
                                        <span className="mr-1">Mã tài sản</span>
                                        {/* <i class="fa fa-arrow-up" id="SapXepTang"></i>
										<i class="fa fa-arrow-down" id="SapXepGiam"></i> */}
                                    </th>
                                    <th>Tên tài sản</th>
                                    <th>Giá</th>
                                    <th>Tình trạng</th>
                                    <th><em className="fa fa-cog" /></th>
                                </tr>
                            </thead>
                            <tbody id="tableDanhSach">
                                {renderListTS()}
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
                                        <span className="input-group-text"><i class="fa fa-circle"></i></span>
                                    </div>
                                    <input type="text" name="maTS" id="maTS" onChange={handleChange} className="form-control input-sm" placeholder="Mã tài sản" />
                                </div>
                                <span className="sp-thongbao" id="tbMaTS" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-couch"></i></span>
                                    </div>
                                    <input type="text" name="tenTS" id="tenTS" onChange={handleChange} className="form-control input-sm" placeholder="Tên tài sản" />
                                </div>
                                <span className="sp-thongbao" id="tbNameTS" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-money-bill-wave"></i></span>
                                    </div>
                                    <input type="text" name="giaTS" id="giaTS" onChange={handleChange} className="form-control input-sm" placeholder="Giá tài sản" />
                                </div>
                                <span className="sp-thongbao" id="tbPriceTS" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-clipboard-list"></i></span>
                                    </div>
                                    <select className="form-control" id="tinhTrangTS" onChange={handleChange} name="tinhTrangTS">
                                        <option>Chọn tình trạng</option>
                                        <option value="Bình thường">Bình thường</option>
                                        <option value="Hư hỏng">Hư hỏng</option>
                                        <option value="Mất">Mất</option>
                                    </select>
                                </div>
                                <span className="sp-thongbao" id="tbTinhTrangTS" />
                            </div>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        <button id="btnThemTS" type="button" className="btn btn-success" onClick={handleAddTS}>Thêm</button>
                        <button id="btnCapNhat" type="button" className="btn btn-success" onClick={handleUpdateTS}>Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" onClick={closeModal}  data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
