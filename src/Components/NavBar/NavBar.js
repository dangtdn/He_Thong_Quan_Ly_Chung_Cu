import React from 'react'

export default function NavBar() {
    
    const hiddenSideBar = () => {
        document.querySelector('#sidebar').classList.toggle('active');
    }
    
    return (
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="btn btn-info navbar-btn"
                    onClick={hiddenSideBar}>
                    <i className="glyphicon glyphicon-align-left" />
                    <span>Toggle</span>
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
    )
}
