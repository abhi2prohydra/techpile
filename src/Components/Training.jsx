import React from "react";

function Training() {
  const trainingTypes = [  
    "Onboarding Training",  
    "Technical Skills Training",  
    "Soft Skills Development",  
    "Agile Methodology Training",  
    "Compliance and Security Training",  
    "Product-Specific Training",  
    "Continuous Learning Programs",  
    "Mentorship Programs"  
];  
  return (
    
    <>
      <div className=" my-5">
        <h3 style={{ fontWeight: "400" }} className=" text-center">
          <span className="orange-tpt">Training</span> at Techpile
        </h3>

        <hr
          style={{
            width: "10vw",
            margin: "0px auto",
            border: "1.5px solid orangered",
            opacity: "0.7",
          }}
          className=" "
        />
        <p className="text-center text-muted">
          Enter as trainees, exit as professionals.
        </p>
        <div className=" d-flex flex-wrap gap-3 justify-content-center text-center  ">
          {
            trainingTypes.map((trainings)=>{
              return(
                <>
                <div className="box shadow  btn btn-outline-info py-3 ">
                  {trainings}
                </div>
                
                </>
              )
            })
          }
          
        </div>
      </div>
    </>
  );
}

export default Training;
