import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import phoneData from "../data/dataPhone.json";
class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  // lấy dữ liệu tại component BaiTapGioHang

  themGioHang = (sanPhamChon) => {
    //b1 : từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      hinhAnh: sanPhamChon.hinhAnh,
      gia: sanPhamChon.gia,
      soLuong: 1,
    };
    //b2: Kiểm trả sản phẩm đó đã có trong giỏ hàng chưa , nếu chưa thì push vào , rồi thì tăng số lượng
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      //sản phẩm đã có trong this.state.gioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //sản phẩm chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Xóa dữ liệu tại component BaiTapGioHang

  xoaGioHang = (maSP) => {
    //tìm trong giỏ hàng có sp chứa maSP được click thì xóa
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    // //cách 2: Hàm filter sẽ lấy những sản phẩm ko có trong gioHang đồng nghĩa với việc xóa sản phẩm đó.
    // var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    // cập nhật lại state giỏ hàng và render ra UI
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    //tangGiam === true: tăng số lượng, false giảm số lượng
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    // set state và render ra UI
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGioHang, index) => {
      return (tsl += spGioHang.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
        <ModalGioHang
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
          gioHang={this.state.gioHang}
        />
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "25px", fontWeight: "bold" }}
            data-toggle="modal"
            data-target="#modalId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          dataArr={phoneData}
        />
      </div>
    );
  }
}

export default BaiTapGioHang;
