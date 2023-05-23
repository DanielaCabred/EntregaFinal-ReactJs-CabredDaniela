const Carousel = () => {
    return (
        <div className="conteiner-fluid my-3">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="hover">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./imagenes/c1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src= "./imagenes/c2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./imagenes/c3.png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>

    )
};

export default Carousel;