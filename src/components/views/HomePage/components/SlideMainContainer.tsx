import "../scss/_homePage.scss";

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

// import { Carousel } from 'antd';

// const contentStyle: React.CSSProperties = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const App: React.FC = () => (
//   <Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );

export default SlideMainContainer;
