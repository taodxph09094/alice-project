import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const RandomList = () => {
  const sliderRef = React.useRef(null);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      {" "}
      {/* random product section heading start */}
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading mt-40">
            <div className="row">
              {/* section title start */}
              <div
                className="col-md-9"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h2>
                  {" "}
                  <img src="img/icon/icon_categories.png" alt="" />
                  Sản phẩm ngẫu nhiên
                </h2>
                {/* <div style={{ marginTop: 20 }}>
                  <IoIosArrowBack onClick={previousSlide} />
                  <span style={{ marginTop: -5 }}>|</span>
                  <IoIosArrowForward onClick={nextSlide} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* random product section heading end */}
      {/* random products start */}
      <div className="row">
        <div className="col-md-12">
          <div className="multiple-items product-details mt-30">
            <Slider {...settings} ref={sliderRef}>
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/1.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.980 <span className="old-price">300.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/2.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.980 <span className="old-price">300.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/3.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.980 <span className="old-price">300.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/4.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.908 <span className="old-price">330.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/5.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.980 <span className="old-price">600.501</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/6.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.980 <span className="old-price">300.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/7.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    208.980 <span className="old-price">300.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/8.jpg" alt="" />
                  <span className="new" />
                </a>
                <div className="item-info text-center">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Samsung galaxy J5 Dual Sim Unlocked Cell...
                    </a>
                  </h2>
                  <h3 className="item-price">
                    {" "}
                    280.980 <span className="old-price">300.510</span>{" "}
                  </h3>
                  <div className="actions">
                    <a href="#" className="single-action">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="single-action">
                      {" "}
                      <i className="zmdi zmdi-favorite-outline" />{" "}
                    </a>
                    <a
                      href="#"
                      className="single-action"
                      data-toggle="modal"
                      data-target="#item-modal"
                    >
                      {" "}
                      <i className="zmdi zmdi-search" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* single product item end */}
            </Slider>
          </div>
        </div>
      </div>
      {/* random products end */}
    </div>
  );
};

export default RandomList;
