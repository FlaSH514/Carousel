import "./index.css";
const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
