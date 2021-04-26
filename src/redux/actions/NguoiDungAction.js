export const DangKyAction = (userTK) => {
    return {
        type: "DANG_KY",
        userTK: userTK
    }
}
export const ThayDoiPassAction = (taiKhoanNew) => {
    return {
        type: "THAY_DOI_MAT_KHAU",
        // pass: pass,
        // username: username
        taiKhoanNew: taiKhoanNew
    }
}