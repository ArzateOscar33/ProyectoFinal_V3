import React from 'react'

export const Carrusel = () => {
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/tec3.jpg" style={{ width: '70%', height: 'auto' }}/>
    </div>
    <div className="carousel-item">
      <img src="./images/tec2.jpg" style={{ width: '70%', height: 'auto' }}/>
    </div>
    <div className="carousel-item">
      <img src="./images/tec1.jpg" style={{ width: '70%', height: 'auto' }}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
export default Carrusel;