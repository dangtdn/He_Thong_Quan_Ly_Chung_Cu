import canHo from '../../assets/data/canHo.json'
import danCu from '../../assets/data/danCu.json'
import dichVu from '../../assets/data/dichVu.json'
import taiSan from '../../assets/data/taiSan.json'
import bienLaiThanhToan from '../../assets/data/bienLaiThanhToan.json'

const stateDefault = {
    mangCH: canHo,
    mangDC: danCu,
    mangDV: dichVu,
    mangTS: taiSan,
    mangBL: bienLaiThanhToan
};

export const ListReducer = (state=stateDefault,action) => {
    switch(action.type) {

        default: return {...state}
    }
}