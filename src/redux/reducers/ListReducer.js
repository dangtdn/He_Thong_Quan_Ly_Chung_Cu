import canHo from '../../assets/data/canHo.json'
import danCu from '../../assets/data/danCu.json'
import dichVu from '../../assets/data/dichVu.json'
import taiSan from '../../assets/data/taiSan.json'
import bienLaiThanhToan from '../../assets/data/bienLaiThanhToan.json'
import taiKhoan from '../../assets/data/taiKhoan.json'

const stateDefault = {
    mangCH: canHo,
    mangDC: danCu,
    mangDV: dichVu,
    mangTS: taiSan,
    mangBL: bienLaiThanhToan,
    mangTK: taiKhoan
};

export const ListReducer = (state = stateDefault,action) => {
    switch(action.type) {
        // CAN_HO
        case "THEM_CAN_HO": {
            const mangCH_Update = [...state.mangCH];

            let index = mangCH_Update.findIndex(item => item.maCH === action.canHo.maCH);
            if(index !== -1) {
                alert('Mã căn hộ đã tồn tại');
            }else {
                mangCH_Update.push(action.canHo);
            }
            return {...state,mangCH:mangCH_Update};
        }
        case "XOA_CAN_HO": {
            let mangCH_Update = [...state.mangCH];

            let isDelete = window.confirm(`Bạn có muốn xóa căn hộ có mã căn hộ ${action.maCH} không?`);
            if(isDelete){
                mangCH_Update = mangCH_Update.filter(item => item.maCH !== action.maCH);
                alert(`Đã xóa thành công xóa căn hộ có mã căn hộ: ${action.maCH}`);
            }
            
            return {...state,mangCH:mangCH_Update};
        }
        case "SUA_CAN_HO": {
            let mangCH_Update = [...state.mangCH];

            let index = mangCH_Update.findIndex(item => item.maCH === action.canHo.maCH);
            
            mangCH_Update[index] = {...action.canHo};
            
            return {...state,mangCH:mangCH_Update};
        }
        //DAN_CU
        case "THEM_DAN_CU": {
            const mangDC_Update = [...state.mangDC];

            let index = mangDC_Update.findIndex(item => item.maDC === action.danCu.maDC);
            if(index !== -1) {
                alert('Mã dân cư đã tồn tại');
            }else {
                mangDC_Update.push(action.danCu);
            }
            return {...state,mangDC:mangDC_Update};
        }
        case "XOA_DAN_CU": {
            let mangDC_Update = [...state.mangDC];
            
            let isDelete = window.confirm(`Bạn có muốn xóa dân cư có mã dân cư ${action.maDC} không?`);
            if(isDelete){
                mangDC_Update = mangDC_Update.filter(item => item.maDC !== action.maDC);
                alert(`Đã xóa thành công xóa dân cư có mã dân cư: ${action.maDC}`);
            }
            
            return {...state,mangDC:mangDC_Update};
        }
        case "SUA_DAN_CU": {
            let mangDC_Update = [...state.mangDC];

            let index = mangDC_Update.findIndex(item => item.maDC === action.danCu.maDC);
            mangDC_Update[index] = {...action.danCu};
            
            return {...state,mangDC:mangDC_Update};
        }
        // TAI_SAN
        case "THEM_TAI_SAN": {
            const mangTS_Update = [...state.mangTS];

            let index = mangTS_Update.findIndex(item => item.maTS === action.taiSan.maTS);
            if(index !== -1) {
                alert('Mã tài sản đã tồn tại');
            }else {
                mangTS_Update.push(action.taiSan);
            }
            return {...state,mangTS:mangTS_Update};
        }
        case "XOA_TAI_SAN": {
            let mangTS_Update = [...state.mangTS];
            
            let isDelete = window.confirm(`Bạn có muốn xóa tài sản có mã tài sản ${action.maTS} không?`);
            if(isDelete){
                mangTS_Update = mangTS_Update.filter(item => item.maTS !== action.maTS);
                alert(`Đã xóa thành công xóa tài sản có mã tài sản: ${action.maTS}`);
            }
            
            return {...state,mangTS:mangTS_Update};
        }
        case "SUA_TAI_SAN": {
            let mangTS_Update = [...state.mangTS];

            let index = mangTS_Update.findIndex(item => item.maTS === action.taiSan.maTS);
            mangTS_Update[index] = {...action.taiSan};
            
            return {...state,mangTS:mangTS_Update};
        }
        // DICH_VU
        case "THEM_DICH_VU": {
            const mangDV_Update = [...state.mangDV];

            let index = mangDV_Update.findIndex(item => item.maDV === action.dichVu.maDV);
            
            if(index !== -1) {
                alert('Mã dịch vụ đã tồn tại');
            }else {
                mangDV_Update.push(action.dichVu);
            }
            return {...state,mangDV:mangDV_Update};
        }
        case "XOA_DICH_VU": {
            let mangDV_Update = [...state.mangDV];
            
            let isDelete = window.confirm(`Bạn có muốn xóa dịch vụ có mã dịch vụ ${action.maDV} không?`);
            if(isDelete){
                mangDV_Update = mangDV_Update.filter(item => item.maDV !== action.maDV);
                alert(`Đã xóa thành công xóa dịch vụ có mã dịch vụ: ${action.maDV}`);
            }
            
            return {...state,mangDV:mangDV_Update};
        }
        case "SUA_DICH_VU": {
            let mangDV_Update = [...state.mangDV];

            let index = mangDV_Update.findIndex(item => item.maDV === action.dichVu.maDV);
            mangDV_Update[index] = {...action.dichVu};
            
            return {...state,mangDV:mangDV_Update};
        }
        // BIEN_LAI
        case "THEM_BIEN_LAI": {
            const mangBL_Update = [...state.mangBL];

            let index = mangBL_Update.findIndex(item => item.maBL === action.bienLai.maBL);
            if(index !== -1) {
                alert('Mã biên lai đã tồn tại');
            }else {
                mangBL_Update.push(action.bienLai);
            }
            return {...state,mangBL:mangBL_Update};
        }
        case "XOA_BIEN_LAI": {
            let mangBL_Update = [...state.mangBL];
            
            let isDelete = window.confirm(`Bạn có muốn xóa biên lai có mã biên lai ${action.maBL} không?`);
            if(isDelete){
                mangBL_Update = mangBL_Update.filter(item => item.maBL !== action.maBL);
                alert(`Đã xóa thành công xóa biên lai có mã biên lai: ${action.maBL}`);
            }
            
            return {...state,mangBL:mangBL_Update};
        }
        case "SUA_BIEN_LAI": {
            let mangBL_Update = [...state.mangBL];

            let index = mangBL_Update.findIndex(item => item.maBL === action.bienLai.maBL);
            mangBL_Update[index] = {...action.bienLai};
            
            return {...state,mangBL:mangBL_Update};
        }
        // TAI KHOAN
        case "XOA_TAI_KHOAN": {
            let mangTK_Update = [...state.mangTK];
            
            let isDelete = window.confirm(`Bạn có muốn xóa tài khoản có username ${action.username} không?`);
            if(isDelete){
                mangTK_Update = mangTK_Update.filter(item => item.username !== action.username);
                alert(`Đã xóa thành công xóa tài khoản có username: ${action.username}`);
            }
            
            return {...state,mangTK:mangTK_Update};
        }
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
        case "THAY_DOI_MAT_KHAU": {
            let mangTK_Update = [...state.mangTK];
            
            let index = mangTK_Update.findIndex(item => item.username = action.taiKhoanNew.username);
            mangTK_Update[index].password = action.taiKhoanNew.password;
            alert("Đã thay đổi mật khẩu thành công");
            return {...state,mangTK: mangTK_Update}
        }
        default: return {...state}
    }
}