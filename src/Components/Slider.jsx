import React from 'react'

function Slider() {
  return (
    <>
    <div id="carouselExampleIndicators" data-bs-ride="carousel" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
  </div>
  <div style={{height:"45vw"}} className="carousel-inner sl-bg  ">
    <div style={{height:"45vw", width:"100%"}} data-bs-interval="2000" className=" carousel-item active">
      <img style={{height:'100%', objectPosition:"top"}} src="/1.png" className="object-fit-contain d-block w-100" alt="..." />
    </div>
    <div data-bs-interval="2000" style={{height:"45vw", width:"100%"}} className="carousel-item">
      <img style={{height:'100%', objectPosition:"top"}} src="/2.png" className="object-fit-contain d-block w-100" alt="..." />
    </div>
    <div data-bs-interval="2000" style={{height:"45vw", width:"100%"}} className="carousel-item">
      <img style={{height:'100%', objectPosition:"top"}} src="/3.png" className="object-fit-contain d-block w-100" alt="..." />
    </div>
    <div data-bs-interval="2000" style={{height:"45vw", width:"100%"}} className="carousel-item">
      <img style={{height:'100%', objectPosition:"top"}} src="/4.png" className="object-fit-contain d-block w-100" alt="..." />
    </div>
    <div data-bs-interval="2000" style={{height:"45vw", width:"100%"}} className="carousel-item">
      <img style={{height:'100%', objectPosition:"top"}} src="/5.png" className="object-fit-contain d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider