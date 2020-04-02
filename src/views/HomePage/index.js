import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import API from "../../API";

const HomePage = () => {
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFilters = async () => {
    setLoading(true);
    let data = await API.get("/filters");
    setLoading(false);
    setFilters(data.data.data);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  const filtersContainer = () => (
    <div className="row pt-2">
      {filters.map(filter => (
        <div key={filter.id} className="col-12 col-md-12 col-lg-12 mb-2">
          <Link
            to={`/filter/cars-owners/${filter.id}`}
            className="text-decoration-none"
          >
            <div className="card  border-0">
              <div className="card-header bg-white border-0 text-center pb-0">
                <h4 className="text-dark">
                  {filter.start_year}-{filter.end_year}
                </h4>
              </div>
              <div className="card-body text-center pt-0">
                <p className="text-capitalize text-dark text-decoration-none">
                  {filter.gender}
                </p>

                <div className="container">
                  {filter.countries.map(country => (
                    <p
                      key={country}
                      className="badge badge-light p-2 m-1 rounded-pill text-muted"
                    >
                      {country}
                    </p>
                  ))}
                </div>

                <div className="d-flex justify-content-center">
                  {filter.colors.map(color => (
                    <div
                      key={color}
                      style={{
                        backgroundColor: color,
                        height: "20px",
                        width: "20px",
                        borderRadius: "100%",
                        margin: "3px"
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container bg-muted p-4">
      <h2 className="page-title">
        <i className="fas fa-filter"></i> Filter
      </h2>

      {loading ? (
        <Loader
          className="text-center"
          type="RevolvingDot"
          color="#00BFFF"
          height={100}
          width={100}
        />
      ) : (
        filtersContainer()
      )}

      {!loading && !filters.length ? (
        <div className="text-muted text-center">
          <h3>No Data</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
