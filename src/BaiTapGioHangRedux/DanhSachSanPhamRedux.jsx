import React, { Component } from "react";
import data from "../data/dataPhone.json";
import SanPhamGioHangRedux from "./SanPhamGioHangRedux";
class DanhSachSanPhamRedux extends Component {
  renderSanPham = () => {
    return data.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamGioHangRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}

export default DanhSachSanPhamRedux;
