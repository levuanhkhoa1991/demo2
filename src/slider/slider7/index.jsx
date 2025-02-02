import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../slider.css";
import { Autoplay } from "swiper/modules";

const Slider7 = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-1.jpg" alt="" />
              <img src="/images/product/default/home-2/default-2.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Consequuntur magni</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">
              {" "}
              <del>$89.00</del> $80.00
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-3.jpg" alt="" />
              <img src="/images/product/default/home-2/default-4.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Pellentesque posuere</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$45.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-5.jpg" alt="" />
              <img src="/images/product/default/home-2/default-6.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Kaoreet lobortis sagit</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$95.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-7.jpg" alt="" />
              <img src="/images/product/default/home-2/default-8.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Phasellus vel hendreri</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$55.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-9.jpg" alt="" />
              <img src="/images/product/default/home-2/default-10.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Duis pulvinar obortis</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">
              <del>$84.00</del> $79.00
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-11.jpg" alt="" />
              <img src="/images/product/default/home-2/default-12.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Cras neque metus</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">
              <del>$70.00</del> $60.00
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-13.jpg" alt="" />
              <img src="/images/product/default/home-2/default-14.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Officiis debitis varius</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$90.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-15.jpg" alt="" />
              <img src="/images/product/default/home-2/default-16.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Ornare sed consequat</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$110.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-17.jpg" alt="" />
              <img src="/images/product/default/home-2/default-18.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Convallis quam sit</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$45.00 - $95.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-2.jpg" alt="" />
              <img src="/images/product/default/home-2/default-1.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Donec eu libero ac</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$74.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-4.jpg" alt="" />
              <img src="/images/product/default/home-2/default-3.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Dolorum fuga eget</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$71.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-6.jpg" alt="" />
              <img src="/images/product/default/home-2/default-5.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Nostrum exercitation</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$86.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-8.jpg" alt="" />
              <img src="/images/product/default/home-2/default-7.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Epicuri per lobortis</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$68.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-10.jpg" alt="" />
              <img src="/images/product/default/home-2/default-9.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Condimentum posuere</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$115.00</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-listview-single-item product-color--green swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-2/default-12.jpg" alt="" />
              <img src="/images/product/default/home-2/default-11.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title">
              <a href="product-details-default.html">Laudantium enim fringi</a>
            </h6>
            <ul className="review-star">
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="fill">
                <i className="ion-android-star"></i>
              </li>
              <li className="empty">
                <i className="ion-android-star"></i>
              </li>
            </ul>
            <span className="price">$86.00</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider7;
