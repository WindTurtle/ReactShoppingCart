import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";
class DanhSachSanPhamGioHang extends Component {
  renderSanPham = () => {
    let { dataArr, themGioHang } = this.props;
    return dataArr.map((sanPham, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamGioHang themGioHang={themGioHang} sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}

export default DanhSachSanPhamGioHang;
