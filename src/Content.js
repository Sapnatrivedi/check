import React from "react";
import "./index.css";
import { FaTrophy } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { BsLaptop } from "react-icons/bs";
import Search from "./Search";
import Twoparts from "./Twoparts";
function Content() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 cont">
            <h1 className="">We Rank the best Courses on the Web</h1>
            <p className="p1">
              In the history of modern astronomy, there is probably no one
              greater leap forward than the building and launch of the space
              telescope known as the Hubble.
            </p>
            <Search/>
          </div>
          <div className="col-lg-6 cont">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card card1">
                  <div className="card-body my-lg-2 ">
                    <div className="row justify-content-lg-center">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-3">
                            <ImBook size="2rem" color="white" />
                          </div>
                          <div className="col-9">
                            <h5 className="card-title p1">New Classes</h5>

                            <p className="card-text p1">
                              {" "}
                              In the history of modern astronomy, there is
                              probably no one greater leap forward building and
                              launch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 my-4">
                <div className="card card2">
                  <div className="card-body my-2">
                    <div className="row justify-content-lg-center">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-3">
                            <FaTrophy size="2rem" color="white" />
                          </div>
                          <div className="col-9">
                            <h5 className="card-title p1">Top Courses</h5>

                            <p className="card-text p1">
                              {" "}
                              In the history of modern astronomy, there is
                              probably no one greater leap forward building and
                              launch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-lg-5">
              <div className="col-lg-8">
                <div className="card card3">
                  <div className="card-body my-2">
                    <div className="row justify-content-lg-center">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-3">
                            <BsLaptop size="2rem" color="white" />
                          </div>
                          <div className="col-9">
                            <h5 className="card-title p1">Full E-Books</h5>

                            <p className="card-text p1">
                              {" "}
                              In the history of modern astronomy, there is
                              probably no one greater leap forward building and
                              launch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Twoparts/>
      </div>
    </>
  );
}

export default Content;
