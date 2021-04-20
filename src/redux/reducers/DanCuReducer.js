import danCu from '../../assets/data/danCu.json'

const stateDefault = danCu;

export const danCuReducer = (state=stateDefault,action) => {
    switch(action.type) {

        default: return {...state}
    }
}