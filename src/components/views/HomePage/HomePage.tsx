import SlideMainContainer from "./components/SlideMainContainer";

function HomePage() {
  return (
    <div className="position-relative pt-5">
      <div className="py-0 bg-white d-flex flex-column position-relative">
        <div className="py-3 pt-0">
          <SlideMainContainer />
        </div>
        <div className="py-3">
          CONTENT 2
        </div>
        <div className="py-3">
          CONTENT 3
        </div>
        <div className="py-3">
          CONTENT 4
        </div>
        <div className="py-3">
          CONTENT 5
        </div>
        <div className="py-3 ">
          CONTENT 5
        </div>
      </div>
    </div>
  );
}

export default HomePage;
