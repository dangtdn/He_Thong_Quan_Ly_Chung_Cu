import taiSan from '../../assets/data/taiSan.json'

const stateDefault = taiSan;

export const taiSanReducer = (state=stateDefault,action) => {
    switch(action.type) {

        default: return {...state}
    }
}