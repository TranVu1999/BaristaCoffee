import React, { Component } from 'react';

import './style.scss';

export default class AccountInfoForm extends Component {
    render() {
        return (
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form className="account__info">
                    <div className="form-group">
                        <div className="input-label">Họ tên</div>
                        <div className="input-group">
                        <input type="text" defaultValue="Trần Lê Anh Vũ" /> 
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Số điện thoại</div>
                        <div className="input-group">
                        <input type="text" className="pattern" defaultValue="0123 456 789" />
                        <button>Gởi mã xác thực</button> 
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Mã xác thực</div>
                        <div className="input-group" placeholder="Nhập mã xác thực">
                        <input type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Email </div>
                        <div className="input-group">
                        <input type="text" defaultValue="Tranvudpqn123@gmail.com" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label gender-label">Giới tính</div>
                        <div className="input-group">
                        <div className="radio-group">
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="male">
                            <div className="label-radio" />
                            Nam
                            </label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" name="gender" id="female" />
                            <label htmlFor="female">
                            <div className="label-radio" />
                            Nữ
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group form-group--date">
                        <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                        <div className="select-group">
                        <select>
                            <option>Ngày</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <select>
                            <option>Tháng</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <select>
                            <option>Năm</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label" />
                        <div className="input-group">
                        <div className="checkbox-group">
                            <input type="checkbox" id="update-password" />
                            <label htmlFor="update-password">
                            <div className="label-checkbox" />
                            Thay đổi mật khẩu
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="update-password-group">
                        <div className="form-group">
                            <div className="input-label"><label>Mật khẩu cũ</label> </div>
                            <div className="input-group">
                                <input type="text" placeholder="Nhập mật khẩu cũ" /> 
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-label"><label>Mật khẩu mới</label></div>
                        <div className="input-group">
                            <input type="text" placeholder="Nhập mật khẩu mới" /> 
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="input-label"><label>Nhập lại</label></div>
                        <div className="input-group">
                            <input type="text" placeholder="Nhập lại mật khẩu mới" /> 
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label" />
                        <button>Cập nhật</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
