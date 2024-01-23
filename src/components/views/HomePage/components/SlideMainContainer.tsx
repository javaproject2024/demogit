import "../_homePage.scss";

function SlideMainContainer() {
  return (
    <div className="top-banners swiper-container home-banners swiper-container-pointer-events swiper-container-autoheight">
      <div
        className="swiper-wrapper"
        aria-live="polite"
      >
        <div
          className="swiper-slide swiper-slide-active"
          role="group"
          aria-label="1 / 1"
        >
          <a href="/tests/">
            <img
              className="banner-img"
              src="/static/media/home/HomeBanner/homeBanner.jpg"
            />
          </a>
        </div>
      </div>
      <div className="swiper-pagination swiper-pagination-bullets">
        <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  );
}

export default SlideMainContainer;
