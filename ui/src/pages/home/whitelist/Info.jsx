import React from "react";

const Info = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingFour">
        <h4 className="panel-title">
          <a
            className="collapsed"
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            <i className="fa fa-user" />
            Thông tin cá nhân
          </a>
        </h4>
      </div>
      <div
        id="collapseFour"
        className="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby="headingFour"
      >
        <div className="panel-body">
          <div className="col-md-12">
            <div className="delivery-info">
              <p>
                Khách hàng: <span>Nguyễn Văn A</span>
              </p>
              <p>
                Địa chỉ: <span>Thanh Liệt, Thanh Trì, Hà Nội</span>
              </p>
              <p>
                Số điện thoại: <span>0123456789</span>
              </p>
              <p>
                Email: <span>admin@admin.vn</span>
              </p>
            </div>
            <div className="panel panel-default" id="sacc">
              <div className="panel-heading" role="tab" id="edit">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#sacc"
                    href="#edit-info"
                    aria-expanded="false"
                    aria-controls="edit-info"
                  >
                    <i className="fa fa-pencil" />
                    Sửa
                  </a>
                </h4>
              </div>
              <div
                id="edit-info"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div className="panel-body">
                  <div className="delivery-details">
                    <form action="#">
                      <div className="list-style">
                        <div className="account-title">
                          <h4>
                            Hãy cập nhật thông tin cá nhân của bạn khi có thay
                            đổi{" "}
                          </h4>
                        </div>
                        <div className="form-name">
                          <label>
                            Họ và tên <em>*</em>{" "}
                          </label>
                          <input
                            type="text"
                            placeholder="Họ và tên"
                            required="required"
                          />
                        </div>
                        <div className="form-name">
                          <p>
                            Địa chỉ này sẽ trở thành địa chỉ mặc định khi bạn
                            mua hàng. Bạn cũng có thể thay đổi địa chỉ khác để
                            tiện cho việc gửi quà hoặc nhận đơn hàng tại địa chỉ
                            khác.
                          </p>
                          <label>
                            Địa chỉ của bạn<em>*</em>{" "}
                          </label>
                          <input
                            type="text"
                            placeholder="Địa chỉ của bạn..."
                            required="required"
                          />
                        </div>
                        <div className="form-name">
                          <label>
                            Số điện thoại <em>*</em>{" "}
                          </label>
                          <input
                            type="tel"
                            placeholder="Số điện thoại"
                            required="required"
                          />
                        </div>
                        <div className="form-name">
                          <label>
                            Email <em>*</em>{" "}
                          </label>
                          <input
                            type="email"
                            placeholder="Email"
                            required="required"
                          />
                        </div>
                        <div className="save-button">
                          <button>Lưu thông tin</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
