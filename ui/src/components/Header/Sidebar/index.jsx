import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
const Sidebar = ({ type }) => {
  return (
    <div className="col-md-3">
      {/* category menu start */}
      <div className="catagory-menu hidden-sm hidden-xs">
        <div className="catagory-heading">
          <h2>Tất cả</h2>
        </div>
        {type === "home" && (
          <div className="catagory-list-menu">
            <ul>
              <li className="arrow">
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/1.jpg" alt="" /> Thời trang
                </a>
                {/* category mega menu start */}
                <div className="c-mega-menu">
                  <div className="block">
                    <span>
                      <a href="#">Váy </a>
                      <a href="#">Áo len</a>
                      <a href="#">Đồ dự tiệc</a>
                      <a href="#">Đồ mặc ngày</a>
                      <a href="#">Đồ thể thao</a>
                    </span>
                    <span>
                      <a href="#">Túi xách </a>
                      <a href="#">Shoulder</a>
                      <a href="#">Satchels</a>
                      <a href="#">Đồ trẻ em</a>
                      <a href="#">Áo khoác</a>
                    </span>
                    <span>
                      <a href="#">Giày</a>
                      <a href="#">Ankle Boots</a>
                      <a href="#">Sandals </a>
                      <a href="#">Giày chạy</a>
                      <a href="#">Sách</a>
                    </span>
                    <span>
                      <a href="#">Quần áo</a>
                      <a href="#">Áo khoác </a>
                      <a href="#">Áo mưa</a>
                      <a href="#">Jackets</a>
                      <a href="#">Áo phông</a>
                    </span>
                  </div>
                  <div className="banner">
                    <a href="#" className="banner-hover">
                      <img src="img/banner/menu.jpg" alt="banner" />
                    </a>
                  </div>
                </div>
                {/* category mega menu end */}
              </li>
              <li className="arrow">
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/2.jpg" alt="" /> Đồ điện
                </a>
                {/* category mega menu start */}
                <div className="c-mega-menu">
                  <div className="block">
                    <span>
                      <a href="#">Laptops </a>
                      <a href="#">Dell Laptops</a>
                      <a href="#">HP Laptops</a>
                      <a href="#">Lenovo Laptops</a>
                      <a href="#">Apple Laptops</a>
                    </span>
                    <span>
                      <a href="#">Camera </a>
                      <a href="#">Cameras kỹ thuật số</a>
                      <a href="#">Camcorders</a>
                      <a href="#">Thiết bị chụp ảnh</a>
                      <a href="#">Thẻ nhớ</a>
                    </span>
                    <span>
                      <a href="#">Smart Phone</a>
                      <a href="#">Apple Phones</a>
                      <a href="#">Samsung Phones </a>
                      <a href="#">Motorola Phones</a>
                      <a href="#">Lenovo Phones</a>
                    </span>
                    <span>
                      <a href="#">Tivi</a>
                      <a href="#">Máy tính All-in-One</a>
                      <a href="#">Towers Only</a>
                      <a href="#">Màn hình Refurbished</a>
                      <a href="#">Màn hình Gaming</a>
                    </span>
                  </div>
                </div>
                {/* category mega menu end */}
              </li>
              <li className="arrow">
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/3.jpg" alt="" /> Nội thất &amp; Trang
                  trí
                </a>
                {/* category mega menu start */}
                <div className="c-mega-menu item-3">
                  <div className="block">
                    <span>
                      <a href="#">Ghế </a>
                      <a href="#">Phòng ăn</a>
                      <a href="#">Phòng ngủ</a>
                      <a href="#">Văn phòng tại gia</a>
                      <a href="#">Phòng khách</a>
                    </span>
                    <span>
                      <a href="#">Đèn </a>
                      <a href="#">Đèn ô</a>
                      <a href="#">Đèn tường</a>
                      <a href="#">Đèn sân</a>
                      <a href="#">Đèn thông minh</a>
                    </span>
                    <span>
                      <a href="#">Sô-pha</a>
                      <a href="#">Sô-pha nỉ</a>
                      <a href="#">Sô-pha da </a>
                      <a href="#">Sô-pha góc</a>
                      <a href="#">Sô-pha giường</a>
                    </span>
                  </div>
                </div>
                {/* category mega menu end */}
              </li>
              <li className="arrow">
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/4.jpg" alt="" />
                  Phụ kiện
                </a>
                {/* category sub menu start */}
                <ul className="c-sub-menu">
                  <li>
                    {" "}
                    <a href="#">Túi &amp; Thắt lưng</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Kính &amp; Readers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Tất &amp; Cà-vạt</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Khăn &amp; Găng tay</a>{" "}
                  </li>
                </ul>
                {/* category sub menu end */}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/5.jpg" alt="" /> Trang sức &amp; Đồng
                  hồ
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/6.jpg" alt="" /> Sức khỏe &amp; Làm
                  đẹp
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/7.jpg" alt="" /> Sách &amp; Văn phòng
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/8.jpg" alt="" /> Thể thao &amp; ngoài
                  trời
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/9.jpg" alt="" /> Smart phone &amp;
                  Tablets
                </a>{" "}
              </li>
              <li className="more-catagory">
                {" "}
                <a href="#">
                  {" "}
                  <i className="zmdi zmdi-plus-circle" /> Thêm danh mục
                </a>{" "}
              </li>
              <li className="more-catagory-item">
                {" "}
                <a href="#">
                  {" "}
                  <img src="img/menu-icon/10.jpg" alt="" /> Computer - Laptop
                </a>{" "}
              </li>
              <li className="less-catagory">
                {" "}
                <a href="#">
                  {" "}
                  <i className="zmdi zmdi-minus-circle" /> Ẩn danh mục
                </a>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* category menu end */}
    </div>
  );
};

export default Sidebar;
