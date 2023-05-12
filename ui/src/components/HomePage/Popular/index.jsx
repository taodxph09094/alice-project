import React, { useEffect } from "react";
import Blog from "../Blog";
import Slider from "react-slick";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Popular = () => {
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
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <div className="pt-40">
      <div className="container">
        {/* electronics section heading start */}
        <div className="row" id="electronics">
          <div className="col-md-12">
            <div className="section-heading mt-40">
              <div className="row">
                {/* section title start */}
                <div className="col-md-4 col-lg-3 col-sm-5">
                  <h2 className="blue small-icon-size">
                    {" "}
                    <img src="img/icon/icon_electronics.jpg" alt="" /> Đồ điện
                    tử
                  </h2>
                </div>
                {/* section title end */}
                <div className="col-md-8 col-lg-9 col-sm-7 col-xs-12">
                  {/* tab menu start */}
                  <ul className="product-tab">
                    <li className="active">
                      <a data-toggle="tab" href="#tab-1">
                        {" "}
                        Bán chạy{" "}
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab-2">
                        {" "}
                        Mới{" "}
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab-3">
                        {" "}
                        Giảm giá{" "}
                      </a>
                    </li>
                  </ul>
                  {/* tab menu end */}
                  {/* category menu start */}
                  <div className="category-item-menu">
                    <ul>
                      <li>
                        <a href="shop.html">laptops</a>
                        <a href="shop.html">camera</a>
                        <a href="shop.html">smart phone</a>
                        <a href="shop.html">Tivi</a>
                        <IoIosArrowBack onClick={previousSlide} />
                        <IoIosArrowForward onClick={nextSlide} />
                      </li>
                    </ul>
                  </div>
                  {/* category menu end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* electronics section heading end */}
        {/* electronics items start */}
        <div className="row">
          <div className="hidden-md hidden-sm hidden-xs col-lg-3">
            <a href="#" className="banner-hover">
              <img src="img/banner/banner1.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="tab-content mt-30">
              <div className="tab-pane active fade in" id="tab-1">
                <div className="multiple-items">
                  <Slider {...settings} ref={sliderRef}>
                    {/* single product item start */}
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}

                    {/* single product item end */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* electronics items end */}
        {/* banner start */}
        <div className="row mt-40">
          <div className="col-sm-6">
            <a href="#" className="banner-hover">
              <img src="img/banner/banner2.jpg" alt="" />
            </a>
          </div>
          <div className="col-sm-6 xs-mt-20">
            <a href="#" className="banner-hover">
              <img src="img/banner/banner3.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* banner end */}
        {/* blog area start */}
        <Blog />
        {/* blog area end */}
      </div>
    </div>
  );
};

export default Popular;
