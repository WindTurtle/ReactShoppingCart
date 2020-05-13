import React, { Component } from "react";

//kết nối redux bằng hàm connect(hàm kết nối reactComponent với reduxStore)
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={75} height={70} alt="" />
          </td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <button
              className="btn btn-info mr-3"
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, true);
              }}
            >
              +
            </button>
            {spGioHang.soLuong}
            <button
              className="btn btn-info ml-3"
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>${spGioHang.gia}</td>
          <td>${spGioHang.soLuong * spGioHang.gia}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHang(index)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã SP</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Tên SP</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Đơn giá</th>
              <th scope="col">Thành tiền</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan="4"></td>
            <td colSpan="1">Tỏng tiền</td>
            <td>
              ${this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                return (tongTien += spGioHang.soLuong * spGioHang.gia);
              }, 0)}
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state : là store tổng, truy xuất đến CartReducer => stateGioHang
  return { gioHang: state.CartReducer.gioHang };
  //   tạo ra 1 props của component ModalGioHangRedux
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };
      console.log(action.tangGiam);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
// sau khi gọi phương thức connect , sẽ trả về 1 component mới có tên ModalGioHangRedux chưa thuộc tính this.props.gioHang nhận được từ reduxStore
