import React, { Component } from "react";

class SanPhamGioHang extends Component {
  render() {
    let { sanPham, themGioHang } = this.props;
    return (
      <div className="card">
        <div className="text-center">
          <img
            className="card-img-top mb-2"
            style={{ width: "200px", height: "230px" }}
            src={sanPham.hinhAnh}
          />
        </div>

        <div className="card-body bg-secondary">
          <h4 className="card-title text-light">{sanPham.tenSP}</h4>
          <p className="card-text text-light">${sanPham.gia}</p>
          <button
            className="btn btn-danger text-light"
            onClick={() => {
              themGioHang(sanPham)
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default SanPhamGioHang;
