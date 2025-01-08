import React from 'react'

function Footer() {
    const navbarItems = [  
        "Home",  
        "About Us",  
        "Services",  
        "Products",  
        "Blog",  
        "Contact Us",  
        "Sign In / Log In",  
        "Sign Up / Register",  
        "Profile",  
        "Dashboard",  
        "Search",  
        "FAQs",  
        "Support / Help",  
        "Terms of Service",  
        "Privacy Policy",  
        "Facebook",  
        "Twitter",  
        "Instagram",  
        "LinkedIn",  
        "YouTube"  
    ];
    const contactDetails = [  
        "Plot No-43, Behind H.P Petrol Pump Tedhi Pulia Ring Rd, Sector 5 Vikas Nagar, LucknowUttar Pradesh 226022",  
        "+91-7007237006",  
        "+91-9140444301",  
        "techpilelko@gmail.com"  
    ]; 
  return (
    <>
    <div className="contianer text-bg-dark p-3">
        <div className="row">
            <div className="col-md-4 p-5 ">
                <img style={{height:"70px"}} src="/gem.png" alt="" /> <br /> <br />
                <img style={{height:"70px"}} src="/start.png" alt="" /> <br /> <br />
                <img style={{height:"70px"}} src="/Playstore.png" alt="" /> <br /><br />
                <i  class="fs-5 orange-tpt mx-1  fa-brands fa-facebook"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-twitter"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-square-instagram"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-whatsapp"></i>
            <i  class="fs-5 orange-tpt mx-1  fa-brands fa-youtube"></i>
            </div>
            <div className="col-md-4" >
                <h3 className=' text-light text-center'>Useful Links</h3> <br /><br /><br />
                <div className=" d-flex flex-wrap">
                {
                        navbarItems.map((item)=>{
                            return(
                                <>
                               <h6 className=' mx-2 p-1 d-flex justify-content-around' >
                                {item}
                               </h6>
                                </>
                            )
                        })
                }
                </div>
                
            </div>
            <div className="col-md-4">
                <h3>Contact Address</h3> <br /> <br /> <br />
                    <div className="wraper">       
                    {
                        contactDetails.map((e)=>{
                            return(
                                <>
                                <h6>
                                    {e}
                                </h6> <br /><br />
                                </>
                            )
                        })
                    }
                    </div>
            </div>
          
        </div>
        
    </div>
    </>
  )
}

export default Footer