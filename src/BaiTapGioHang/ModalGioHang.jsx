import React, { Component } from "react";

class ModalGioHang extends Component {
  renderGioHang = () => {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props; //Lấy dữ liệu giohang từ BaiTapGioHang.jsx
    return gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <th scope="row">{spGioHang.maSP}</th>
          <td>
            <img
              style={{ width: "50px", height: "50px" }}
              src={spGioHang.hinhAnh}
              alt="hinhanhsanpham"
            />
          </td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <button
              className="btn btn-info mr-2"
              onClick={() => {
                tangGiamSoLuong(spGioHang.maSP, true);
              }}
            >
              +
            </button>
            {spGioHang.soLuong}
            <button
              className="btn btn-info ml-2"
              onClick={() => {
                tangGiamSoLuong(spGioHang.maSP, false);
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
              onClick={() => {
                xoaGioHang(spGioHang.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    let tongTien = this.props.gioHang.reduce((tongTien, spGioHang, index) => {
      return (tongTien += spGioHang.soLuong * spGioHang.gia);
    }, 0);
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ maxWidth: "800px" }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mã SP</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Tên SP</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng tiền</td>
                      <td>${tongTien}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalGioHang;
