import taiKhoan from '../../assets/data/taiKhoan.json'

const stateDefault = {
    mangTK: taiKhoan,
    register: {
        status: true
    }
}

export const NguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DANG_KY": {
            let mangTK_Update = [...state.mangTK];
            let register_Update = {...state.register};

            const index = mangTK_Update.findIndex(item => item.username == action.userTK.username);
            if(index !== -1) {
                alert('Tài khoản đã tồn tại!!!');
                register_Update.status = false;
            }else {
                mangTK_Update.push(action.userTK);
                register_Update.status = true;
                alert('Tạo thành công');
            }
            return {...state,mangTK: mangTK_Update, register: register_Update}
        }
        default: return {...state}
    }
}