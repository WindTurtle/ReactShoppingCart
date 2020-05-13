// khởi tạo giá trị ban đầu của store
const stateGioHang = {
  gioHang: [],
};

export const CartReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xử lý logic thêm giỏ hàng
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGioHang) => spGioHang.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      gioHangCapNhat.splice(action.index, 1);
      state.gioHang = gioHangCapNhat; //render lại giao diện
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangCapNhat; //render lại giao diện
      return { ...state };
    }
  }
  return { ...state };
};
