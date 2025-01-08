import React from "react";

function Card() {
  let arr = [
    {
      title: "Summer Training(45-60 Days)",
      text: "Techpile offers you an appreciated training program with an objective to enhance the knowledge of the students on different cutting edge technologies for the B.Tech(CS/IT),BCA,MCA students.",
    },
    {
      title: "Vocational Training(45-60 Days)",
      text: "Techpile offers an amazing Vocational Training program to make you expert in your field, which is a live project based training. Students related to the Diploma(CS/IT), PGDCA can join this program.",
    },
    {
      title: "Summer Training(45 Days)",
      text: "This Summer Training program is designed to Teach, Guide and Enrich students to become ready for corporate. Students related to the B.Tech(CS/IT),PGDCA, Diploma(CS/IT), BCA, MCA can join this program. , Techpile provides Best Summer Training in lucknow",
    },
    {
      title: "Apprenticeship(6 Month) ",
      text: " Techpile offers you apprenticeship program with experienced consultants who would like to take a step with you towards your success and make you capable to work with a reputed organization.Offered for Pass-out Students of B.Tech(CS/IT),PGDCA, Diploma(CS/IT), BCA & MCA",
    },
    {
      title: "Syllabus Training(30 Days)",
      text: "Techpile helps you to let you know something more interesting about technical subjects of your syllabus by the help of which you can be able to grasp the practical and empirical meaning of the subjects. Students related to the B.Tech(CS/IT),PGDCA, Diploma(CS/IT), BCA, MCA can join this program. ",
    },
    {
      title: "PD & Skills Development(30 Days) ",
      text: " Techpile offers a session of personality development which helps you to get positive thought pattern, gain confidence, improve behavior, learn better communication and develop a healthy physique. Interested candidates are most welcome to participate the program.",
    },
  ];
  return (
    <>
      {arr.map((value) => {
       
        return (
          <>
            <div style={{ width: "300px"  }} className="outer position-relative rounded-4  p-3 bg-info-subtle shadow ">
          <i style={{marginTop:"-10px", color:"orange", fontSize:"30px"}} class="position-absolute top-0 start-0  fa-solid fa-laptop-code"></i>
              <div className="fs-5 fw-semibold  card-title-of-cards">
                {value.title}
              </div>
              <div className="card-text-of-cards text-muted">{value.text}</div>
              <span className="btn btn-outline-dark">Know more</span>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
