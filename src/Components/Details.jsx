import React from 'react'

function Details() {
  return (
    <>
   <div className="details">
    <div  className=" light-bg p-1  row">
      <div className="col-lg-2  text-center">
      <span className='text-muted fw-bold' style={{fontSize:"12px"}}><i class="fa-solid fa-phone fa-spin"></i> +91 9787375390</span>
     
      </div>
        <div  className="col-lg-7  text-center ">
           
            <b className='p-1 rounded-1 text-bg-dark mx-1' style={{fontSize:"12px"}}><i class="fa-solid fa-arrow-right"></i> Click to visit our software development website</b>
            <b className='p-1 rounded-1 text-bg-dark mx-1' style={{fontSize:"12px"}}>Company Profile &nbsp; <i class="fa-solid fa-download"></i></b>
            <b className='p-1 rounded-1 text-bg-dark mx-1' style={{fontSize:"12px"}}>Call &nbsp;<i class="fa-solid fa-phone"></i></b>
            <b className='p-1 rounded-1 text-bg-dark mx-1' style={{fontSize:"12px"}}>Our Placement &nbsp; <i class="fa-solid fa-graduation-cap"></i></b>
        </div>
        <div className="col-lg-3  text-center">
            {/* here comes social media icons */}
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-facebook"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-twitter"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-square-instagram"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-whatsapp"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-youtube"></i>
        </div>
    </div>
   </div>
    </>
  )
}

export default Details