import React, { Component } from 'react';
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tập giỏ hàng Redux</h3>
                <ModalGioHangRedux />
                <DanhSachSanPhamRedux />
            </div>
        );
    }
}

export default BaiTapGioHangRedux;