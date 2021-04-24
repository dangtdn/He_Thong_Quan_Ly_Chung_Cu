export const DangKyAction = (userTK) => {
    return {
        type: "DANG_KY",
        userTK: userTK
    }
}
export const ThayDoiPassAction = (pass) => {
    return {
        type: "THAY_DOI_MAT_KHAU",
        pass: pass
    }
}