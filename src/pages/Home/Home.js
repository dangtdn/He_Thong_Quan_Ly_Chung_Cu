import React from 'react'

export default function Home() {

    const hiddenSideBar = () => {
        document.querySelector('#sidebar').classList.toggle('active');
    }

    return (
        <div id="content">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="btn btn-info navbar-btn"
                        onClick={hiddenSideBar}>
                            <i className="glyphicon glyphicon-align-left" />
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                        </ul>
                    </div>
                </div>
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
