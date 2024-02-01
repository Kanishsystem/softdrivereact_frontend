import React from "react";
import "./Insights.css";

const StorageCard = () => {
  return (
    <>
      <strong className="is-size-4">Insights</strong>
      <div className="container">
        <div className="columns">
          {/* main card */}
          <div className="column is-9">
            <div className="columns">
              <div className="column is-12">
                <div className="card is-flex">
                  <div className="card-content">
                    <p className="has-text-weight-medium">Storage</p>
                    <p className="is-size-2 has-text-weight-semibold">
                      2160 MB
                    </p>
                    <p className="is-size-5 has-text-weight-light">
                      of 3000 GB used
                    </p>
                    <button className="button is-rounded mt-5 is-link is-outlined">
                      <i class="fa fa-plus-circle pr-1" aria-hidden="true"></i>
                      Get More storage
                    </button>
                    <button className="button mt-5 is-inverted is-link dashboard-insights-button">
                      Clean up space
                    </button>
                  </div>
                  <div>Chart</div>
                </div>
              </div>
              <div className="column is-3">
                <StatsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StorageSecCard = () => {
  return (
    <div className="columns">
      <div className="column is-9">
        <div className="card">
          <div className="card-content is-flex">
            <p className="has-text-weight-medium">
              How Files are used?
              <p className="has-text-weight-ligth dashboard-insights-para2">
                How has your Porta been used for personal and collaboration?
              </p>
            </p>
            <div className="navbar-dropdown"></div>
          </div>
          <div>Chart</div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = () => {
  return (
    <div className="columns">
      <div className="column is-12">
        <div className="card">
          <div className="card-content is-flex">
            <p className="has-text-weight-medium">Stats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <div>
      <StorageCard />
      <StorageSecCard />
    </div>
  );
};

export default Insights;
