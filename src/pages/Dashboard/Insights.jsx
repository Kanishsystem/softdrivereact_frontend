import React from "react";
import "./Insights.css";
import { PIE_CHART } from "../../services/ImageService";
import { CHART } from "../../services/ImageService";

const StorageCard = () => {
  return (
    <>
      <strong className="is-size-4">Insights</strong>
      <div className="container">
        <div className="columns">
          {/* main card */}
          <div className="column is-9">
            <div className="columns">
              <div className="column">
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
                  <div className="pt-5 pl-5">
                    <img src={PIE_CHART} alt="pie-chart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <StatsCard />
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
          <div>
            <img src={CHART} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ items }) => {
  // const StatsCardItem = [
  //   { id: 1, value: "+82", label: "new files uploaded", del: "Details" },
  //   { id: 2, value: "+7", label: "active members", del: "Details" },
  //   { id: 3, value: "39", label: "external views", del: "Details" },
  // ];
  return (
    <div className="columns">
      <div className="column">
        <div className="card">
          <div className="card-content is-flex is-justify-content-space-between">
            <p className="has-text-weight-medium">Stats</p>
            <div className="select is-small">
              <select>
                <option>Last 7 Days</option>
                <option>Last 1 Month</option>
              </select>
            </div>
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
