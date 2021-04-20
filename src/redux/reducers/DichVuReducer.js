import dichVu from '../../assets/data/dichVu.json'

const stateDefault = dichVu;

export const dichVuReducer = (state=stateDefault,action) => {
    switch(action.type) {

        default: return {...state}
    }
}