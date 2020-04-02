import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CarImage from "../../assets/car.png";
import API from "../../API";

const CardOwnersPage = ({ match }) => {
  const [carOwners, setCarOwners] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCarOwnersData = async () => {
    setLoading(true);
    let data = await API.get(`/filter/${match.params.id}`);
    setLoading(false);
    setCarOwners(data.data.data);
  };

  const carDataContainer = () => (
    <div className="row pt-2 justify-content-center">
      {carOwners.map(carOwner => (
        <div key={carOwner.id} className="col-7 col-md-7 col-lg-7 mb-2">
          <div className="card mb-3 border-0">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={CarImage}
                  className="card-img"
                  alt={carOwner.car_model}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {carOwner.first_name} {carOwner.last_name}
                  </h5>

                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex mb-2">
                        <div className="col pl-0 text-left border-right">
                          <span className="text-muted">Brand</span> <br />
                          <span className="text-truncate text-dark">
                            {carOwner.car_model}
                          </span>
                        </div>
                        <div className="col border-right">
                          <span className="text-muted">Year</span> <br />
                          <span className="text-truncate text-dark">
                            {carOwner.car_model_year}
                          </span>
                        </div>
                        <div className="col">
                          <span className="text-muted">Color</span> <br />
                          <span className="text-truncate text-dark">
                            <div
                              style={{
                                backgroundColor: carOwner.car_color,
                                height: "20px",
                                width: "20px",
                                borderRadius: "100%",
                                margin: "3px"
                              }}
                            ></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <div className="col p-0 text-left">
                      <span className="text-muted">Country</span> <br />
                      <span className="text-truncate text-dark">
                        {carOwner.country}
                      </span>
                    </div>
                    <div className="col">
                      <span className="text-muted">Gender</span> <br />
                      <span className="text-truncate text-dark">
                        {carOwner.gender}
                      </span>
                    </div>
                    <div className="col">
                      <span className="text-muted">Job</span> <br />
                      <span className="text-truncate text-dark">
                        {carOwner.job_title}
                      </span>
                    </div>
                  </div>

                  <p className="card-text m-0">
                    <span className="text-muted">Email: &ensp;</span>
                    <span className="text-dark">{carOwner.email}</span>
                  </p>
                  <div className="row">
                    <span className="col-2 text-muted">Bio: </span>
                    <span className="col-10 text-truncate text-dark">
                      {carOwner.bio}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    fetchCarOwnersData();
  }, []);

  return (
    <div className="container bg-muted p-4">
      <Link to="/" className="text-decoration-none">
        <h2 className="page-title text-dark">
          <i className="fas fa-chevron-left mr-1"></i> Home
        </h2>
      </Link>

      {loading ? (
        <Loader
          className="text-center"
          type="RevolvingDot"
          color="#00BFFF"
          height={100}
          width={100}
        />
      ) : (
        carDataContainer()
      )}

      {!loading && !carOwners.length ? (
        <div className="text-muted text-center">
          <h3>No Data</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardOwnersPage;
