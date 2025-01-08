import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white ">
  <div className="container-fluid">
    <div className="col-md-3 ">
      <a href="">
    <img src="/logo.png" style={{width:"80%", }} alt="" />

      </a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    </div>
   
    <div className=" col-md-9 justify-content-end pe-5 collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"> <i class="fa-solid fa-house"></i>Home</a>
        <a className="nav-link" href="#"><i class="fa-solid fa-address-card"></i> About</a>
        <a className="nav-link" href="#"> <i class="fa-solid fa-right-from-bracket"></i>Registration</a>
        <a className="nav-link" href="#"><i class="fa-solid fa-book"></i> Courses</a>
        <a className="nav-link" href="#"><i class="fa-solid fa-fire"></i> Training</a>
        <a className="nav-link" href="#"><i class="fa-solid fa-graduation-cap"></i> MOUs</a>
        <a className="nav-link" href="#"> <i class="fa-solid fa-image"></i> Photo Gallery</a>
        <a className="nav-link" href="#"><i class="fa-solid fa-location-dot"></i> Contact</a>
        <a className="nav-link" href="#"><i class="fa-solid fa-rss"></i> Feedback</a>
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar