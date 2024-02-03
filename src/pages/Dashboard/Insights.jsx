import "./Insights.css";
import { PIE_CHART } from "../../services/ImageService";
import { CHART } from "../../services/ImageService";
import { USER_PIC } from "../../services/ImageService";
import { SmartSoftTable } from "soft_digi";

const Insights = () => {
  const nameFunction = (row) => {
    return (
      <div className="is-flex">
        <figure className="image is-32x32 mr-2">
          <img className="is-rounded" src={USER_PIC} alt="profile" />
        </figure>
        {row["name"] || ""}
      </div>
    );
  };

  const nameTags = [
    { value: "pending", label: "Pending", class: "is-warning" },
    { value: "unread", label: "Unread", class: "is-warning" },
    { value: "download", label: "Download", class: "is-success" },
  ];

  const buttons = [
    {
      label: "",
      leftIcon: "fa fa-download",
      type: "icon",
      classList: [""],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const StorageCard = () => {
    return (
      <>
        <strong className="is-size-4">Insights</strong>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <div className="columns">
                <div className="column is-flex is-flex-direction-column">
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
                        <i
                          class="fa fa-plus-circle pr-1"
                          aria-hidden="true"
                        ></i>
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
                  {StorageSecCard()}
                </div>
              </div>
            </div>
            <div className="column is-3">{StatsCard()}</div>
          </div>
        </div>
      </>
    );
  };

  const StorageSecCard = () => {
    return (
      <>
        <div className="columns pt-5">
          <div className="column">
            <div className="card">
              <div className="card-content is-flex is-flex is-justify-content-space-between">
                <p className="has-text-weight-medium">
                  How Files are used?
                  <p className="has-text-weight-ligth dashboard-insights-para2">
                    How has your Porta been used for personal and collaboration?
                  </p>
                </p>
                <div className="select is-small">
                  <select>
                    <option>Last 7 Days</option>
                    <option>Last 1 Month</option>
                  </select>
                </div>
              </div>
              <div>
                <img src={CHART} alt="chart" />
              </div>
              <div className="is-flex is-justify-content-space-around pt-5">
                <span className="has-text-primary">
                  <input type="checkbox" />
                  <label htmlFor="all">All</label>
                </span>
                <span className="has-text-danger">
                  <input type="checkbox" />
                  <label htmlFor="upload">Upload</label>
                </span>
                <span className="has-text-link">
                  <input type="checkbox" />
                  <label htmlFor="comment&edit">Comment & Edit</label>
                </span>
                <span className="has-text-success">
                  <input type="checkbox" />
                  <label htmlFor="download">Download</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const StatsCard = () => {
    const StatsCardItem = [
      { id: 1, value: "+82", label: "new files uploaded", del: "Details" },
      { id: 2, value: "+7", label: "active members", del: "Details" },
      { id: 3, value: "39", label: "external views", del: "Details" },
    ];
    return (
      <>
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
              {StatsCardItem.map((item) => (
                <ul className="is-flex is-justify-content-space-between p-2">
                  <li>{item.value}</li>
                  <li>{item.label}</li>
                  <li>{item.del}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const Activity = () => {
    return (
      <>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <div className="columns">
                <div className="column">
                  <div className="card">
                    <div className="card-content is-flex is-justify-content-space-between">
                      <p className="has-text-weight-medium">Activity</p>
                      <div className="select is-small">
                        <select>
                          <option>Last 7 Days</option>
                          <option>Last 1 Month</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="navbar is-flex is-justify-content-space-around">
                    <a href="#">All</a>
                    <a href="#">File Request</a>
                    <a href="#">Upload</a>
                    <a href="#">Download</a>
                  </div>
                  {StorageTable()}
                </div>
              </div>
            </div>
            <div className="column is-3">{ActiveMembar()}</div>
          </div>
        </div>
      </>
    );
  };

  const StorageTable = () => {
    const columns = [
      { title: "", index: "name", valueFunction: nameFunction },
      { title: "", index: "access" },
      { title: "", index: "msg" },
      { title: "", index: "tags", type: "tags", tags: nameTags },
      { title: "", index: "action", type: "action", buttons: buttons },
    ];

    const data = [
      {
        id: 1,
        name: "Balaji",
        access: "requested access for",
        msg: "key Visual Opt.02",
        tags: "pending",
      },
      {
        id: 2,
        name: "Yuva",
        access: "requested access for",
        msg: "key Visual Opt.02",
        tags: "pending",
      },
      {
        id: 3,
        name: "Jana",
        access: "Commented",
        msg: "key Visual Opt.02",
        tags: "unread",
      },
      {
        id: 4,
        name: "Kalki",
        access: "requested for download",
        msg: "key Visual Opt.02",
        tags: "download",
      },
    ];
    return <SmartSoftTable data={data} columns={columns} />;
  };

  const ActiveMembar = () => {
    const items = [
      { id: 1, label: "Balaji", status: "Active", del: "Details" },
      { id: 2, label: "Yuva", status: "15 min ago", del: "Details" },
      { id: 3, label: "Jana", status: "30 min ago", del: "Details" },
      { id: 4, label: "Kalki", status: "45 min ago", del: "Details" },
    ];
    return (
      <>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content is-flex is-justify-content-space-between">
                <p className="has-text-weight-medium">Active Members</p>
                <i class="fa fa-ellipsis-h pt-1 pl-5" aria-hidden="true"></i>
              </div>
              {items.map((item) => (
                <ul className="is-flex is-justify-content-space-between p-2">
                  <li>{item.label}</li>
                  <li>{item.status}</li>
                  <li>{item.del}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {StorageCard()}
      {Activity()}
    </>
  );
};

export default Insights;
