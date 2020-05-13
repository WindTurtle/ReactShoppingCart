import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamGioHangRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div>
        <div className="card text-white">
          <div className="text-center">
            <img
              className="card-img-top mb-2"
              style={{ width: "200px", height: "230px" }}
              src={sanPham.hinhAnh}
            />
          </div>
          <div className="card-body bg-secondary">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">${sanPham.gia}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    //tạo ra props là function => đưa dữ liệu lên store
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        gia: sanPham.gia,
        soLuong: 1,
      };
      //tạo action
      const action = {
        type: "THEM_GIO_HANG",
        spGioHang: spGioHang,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamGioHangRedux);
