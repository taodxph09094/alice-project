import React from "react";

const Abside = () => {
  return (
    <div className="col-md-3 col-sm-8 col-sm-offset-2 col-md-offset-0">
      {/* sidebar start */}
      <div className="sidebar">
        {/* categories start */}
        <div className="sidebar-widget">
          <h3 className="sidebar-title">Danh mục</h3>
          <div className="input-box">
            <input
              type="checkbox"
              name="category"
              defaultValue="Váy"
              id="Váy"
            />
            <label htmlFor="Váy">Váy (9)</label>
          </div>
          <div className="input-box">
            <input
              type="checkbox"
              name="category"
              defaultValue="Túi xách"
              id="Túi xách"
            />
            <label htmlFor="Túi xách">Túi xách (9)</label>
          </div>
          <div className="input-box">
            <input
              type="checkbox"
              name="category"
              defaultValue="Giày"
              id="Giày"
            />
            <label htmlFor="Giày">Giày (9)</label>
          </div>
          <div className="input-box">
            <input
              type="checkbox"
              name="category"
              defaultValue="Quần áo"
              id="Quần áo"
            />
            <label htmlFor="Quần áo">Quần áo (9)</label>
          </div>
        </div>
        {/* categories end */}
        {/* Tình trạng start */}
        <div className="sidebar-widget">
          <h3 className="sidebar-title">Tình trạng</h3>
          <div className="input-box">
            <input
              type="checkbox"
              name="instock"
              defaultValue="instock"
              id="stock"
            />
            <label htmlFor="stock">Còn hàng (9)</label>
          </div>
        </div>
        {/* Tình trạng end */}
        {/* Điều kiện start */}
        <div className="sidebar-widget">
          <h3 className="sidebar-title">Điều kiện</h3>
          <div className="input-box">
            <input type="checkbox" name="new" defaultValue="new" id="new" />
            <label htmlFor="new"> Mới (9)</label>
          </div>
        </div>
        {/* Điều kiện end */}
        {/* Manufacturer start */}
        <div className="sidebar-widget">
          <h3 className="sidebar-title">Nhãn hiệu</h3>
          <div className="input-box">
            <input
              type="checkbox"
              name="FashionManufacturer"
              defaultValue="FashionManufacturer"
              id="manufac"
            />
            <label htmlFor="manufac">Nhãn hiệu thời trang (9)</label>
          </div>
        </div>
        {/* Manufacturer end */}
      </div>
      {/* sidebar end */}
      {/* top seller items start */}
      <div className="row">
        <div className="col-md-12 mt-40">
          {/* section title start */}
          <div className="section-heading">
            <h2>
              {" "}
              <img src="img/icon/icon_title_topseller.png" alt="" /> Sản phẩm
              bán chạy
            </h2>
          </div>
          {/* section title start */}
          {/* new arrival start */}
          <div className="new-arrival-items style-2 grey-bordered mt-30">
            {/* list items start */}
            <div className="list-items">
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/1.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      10FT Paracord 7 Strand Parachute Cord...
                    </a>
                  </h2>
                  <h3 className="item-price"> 500.780 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/2.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Butterfly Mid-Century Dining Chair...
                    </a>
                  </h2>
                  <h3 className="item-price"> 200.710 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/35.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Customized 19Inch Computer Screen...
                    </a>
                  </h2>
                  <h3 className="item-price"> 300.980 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/23.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Customized 19Inch Computer Screen...
                    </a>
                  </h2>
                  <h3 className="item-price"> 300.980 </h3>
                </div>
              </div>
              {/* single product item end */}
            </div>
            {/* list items start */}
            {/* list items start */}
            <div className="list-items">
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/12.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      10FT Paracord 7 Strand Parachute Cord...
                    </a>
                  </h2>
                  <h3 className="item-price"> 500.708 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/45.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Butterfly Mid-Century Dining Chair...
                    </a>
                  </h2>
                  <h3 className="item-price"> 200.710 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/46.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Customized 19Inch Computer Screen...
                    </a>
                  </h2>
                  <h3 className="item-price"> 300.980 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/24.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Customized 19Inch Computer Screen...
                    </a>
                  </h2>
                  <h3 className="item-price"> 300.980 </h3>
                </div>
              </div>
              {/* single product item end */}
            </div>
            {/* list items start */}
            {/* list items start */}
            <div className="list-items">
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/42.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      10FT Paracord 7 Strand Parachute Cord...
                    </a>
                  </h2>
                  <h3 className="item-price"> 500.780 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/48.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Butterfly Mid-Century Dining Chair...
                    </a>
                  </h2>
                  <h3 className="item-price"> 200.710 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/37.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Customized 19Inch Computer Screen...
                    </a>
                  </h2>
                  <h3 className="item-price"> 300.980 </h3>
                </div>
              </div>
              {/* single product item end */}
              {/* single product item start */}
              <div className="single-product-item floating">
                <a href="product-details.html" className="item-img">
                  <img src="img/products/21.jpg" alt="" />
                </a>
                <div className="item-info">
                  <h2>
                    <a href="product-details.html" className="item-title">
                      Customized 19Inch Computer Screen...
                    </a>
                  </h2>
                  <h3 className="item-price"> 300.980 </h3>
                </div>
              </div>
              {/* single product item end */}
            </div>
            {/* list items start */}
          </div>
          {/* new arrival end */}
        </div>
      </div>
      {/* top seller items end */}
    </div>
  );
};

export default Abside;
