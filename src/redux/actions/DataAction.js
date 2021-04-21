// CAN_HO
export const addCHAction = (canHo) => {
    return {
        type: "THEM_CAN_HO",
        canHo: canHo
    }
}

export const deleteCHAction = (maCH) => {
    return {
        type: "XOA_CAN_HO",
        maCH: maCH
    }
}

export const editCHAction = (canHo) => {
    return {
        type: "SUA_CAN_HO",
        canHo: canHo
    }
}

// DAN_CU
export const addDCAction = (danCu) => {
    return {
        type: "THEM_DAN_CU",
        danCu: danCu
    }
}

export const deleteDCAction = (maDC) => {
    return {
        type: "XOA_DAN_CU",
        maDC: maDC
    }
}

export const editDCAction = (danCu) => {
    return {
        type: "SUA_DAN_CU",
        danCu: danCu
    }
}

// TAI_SAN
export const addTSAction = (taiSan) => {
    return {
        type: "THEM_TAI_SAN",
        taiSan: taiSan
    }
}

export const deleteTSAction = (maTS) => {
    return {
        type: "XOA_TAI_SAN",
        maTS: maTS
    }
}

export const editTSAction = (taiSan) => {
    return {
        type: "SUA_TAI_SAN",
        taiSan: taiSan
    }
}

// BIEN_LAI
export const addBLAction = (bienLai) => {
    return {
        type: "THEM_BIEN_LAI",
        bienLai: bienLai
    }
}

export const deleteBLAction = (maBL) => {
    return {
        type: "XOA_BIEN_LAI",
        maBL: maBL
    }
}

export const editBLAction = (bienLai) => {
    return {
        type: "SUA_BIEN_LAI",
        bienLai: bienLai
    }
}

// DICH_VU
export const addDVAction = (dichVu) => {
    return {
        type: "THEM_DICH_VU",
        dichVu: dichVu
    }
}

export const deleteDVAction = (maDV) => {
    return {
        type: "XOA_DICH_VU",
        maDV: maDV
    }
}

export const editDVAction = (dichVu) => {
    return {
        type: "SUA_DICH_VU",
        dichVu: dichVu
    }
}