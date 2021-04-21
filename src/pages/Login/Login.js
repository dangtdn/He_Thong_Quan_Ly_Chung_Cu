import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { history } from '../../App';

export default function Login() {

    const [data,setData] = useState({
        values: {
            username: "",
            password: ""
        }
    })

    const {mangTK} = useSelector(state => state.NguoiDungReducer);
    // const [listUser, setUser] = useState(taiKhoan)

    const submitLogin = (event) => {
        event.preventDefault();
        const {username, password} = data.values;
        console.log(mangTK)
        const userExist = mangTK.find((user, index) => {
            if(user.username == username && user.password == password){
                return true;
            }
        });

        if(userExist){
            localStorage.setItem("user", JSON.stringify({
                type: userExist.type,
                isLogin: true
            }));
            console.log(userExist.type);
            
            window.location="/home";
            history.push('/home');
        }else{
            alert("Username hoặc password sai!!!!");
        }
    }

    const handleChange = (event) => {
        let {value, name} = event.target;

        let newValues = {...data.values};
        newValues[name] = value;

        setData({
            values: newValues
        })

    }

    return (
        <div id="content">
            <form onSubmit={submitLogin}>
                <h1 className="text-center">LOG IN</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={handleChange} className="form-control" id="username" placeholder="Enter username..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control" id="password" placeholder="Enter password..."/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="save" />
                    <label className="form-check-label" htmlFor="save">Save password</label>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>

        </div>

    )
}
