import React from "react";

function Web() {
  return (
    <>
      <div className="container-fluid light-bg p-3">
        <h3 className="text-center fw-normal">
          {" "}
          <span className="orange-tpt">Techpile</span> In Web Designing &
          Development
        </h3>
        <hr
          style={{
            width: "15vw",
            margin: "0px auto",
            border: "1.5px solid orangered",
            opacity: "0.7",
          }}
          className=" "
        />
        <p className="text-muted text-center text-muted">
          Our services are designed to take your business to the next level,
          reducing the gap between you <br /> and the heights of success you
          wish to achieve.
        </p>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6 p-4">
            <iframe
              style={{ width: "100%", borderRadius: "2vw" }}
              height="315"
              src="https://www.youtube.com/embed/FAv2iDwKunw?si=9jVYISQqx5RawSi0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-2 ">
                <div
                  className=" d-flex align-items-center justify-content-center rounded-circle orange-bg-tpt"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i class="fs-1 fa-solid  fa-code"></i>
                </div>
              </div>
              <div className="col-10">
                <h4 className="">Best in Website & Web Development</h4>
                <p className="text-muted">
                  Websites have become a basic requirement for every business
                  today. At Techpile we offer website design and Development
                  services which will play a pivotal role in your success on the
                  internet by building a superior website for your company.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 ">
                <div
                  className=" d-flex align-items-center justify-content-center rounded-circle orange-bg-tpt"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i class="fa-solid fs-1 fa-laptop-code"></i>
                </div>
              </div>
              <div className="col-10">
                <h4 className="">Software And ERP Solution</h4>
                <p className="text-muted">
                  Techpile converts your ideas into application by providing you
                  applications that manage core business processes, such as
                  sales, purchasing, accounting, Human Resource, CRM and
                  inventory.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 ">
                <div
                  className=" d-flex align-items-center justify-content-center rounded-circle orange-bg-tpt"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i class="fa-solid fs-1 fa-database"></i>
                </div>
              </div>
              <div className="col-10">
                <h4 className="">Domain & Hosting Servers</h4>
                <p className="text-muted">
                  Techpile offers you the best domain and hosting provider
                  service with 24*7 help which will make your contents available
                  to you and your customers through a web browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Web;
