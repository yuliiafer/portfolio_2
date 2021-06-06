import Carousel from "react-bootstrap/Carousel";

function Works() {
  return (
    <>
      <div className="sectionwrapper works">
        <Carousel>
          <Carousel.Item>
            <img className="works-img" src="images/fp.png" alt="flower power" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="works-img"
              src="images/full-recycle.png"
              alt="cycle"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="works-img" src="images/2.png" alt="portfolio" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Works;
