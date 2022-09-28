import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Carrusel() {
  return (
    <div
      id="carouselControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="./img/carousel-1.jpg" className="d-block w-100" alt="imagen carousel" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="./img/carousel-3.jpg" className="d-block w-100" alt="imagen carousel" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="./img/carousel-2.jpg" className="d-block w-100" alt="imagen carousel" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


export default Carrusel;
