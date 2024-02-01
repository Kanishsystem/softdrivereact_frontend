import React from "react";
import "./FileViewer.css";

const FileViewer = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand p-3 pages-fileview-button">
          <span key="fileviewbtn_1" className="navbar-item">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span key="fileviewbtn_2">
              <button>
                <i className="fa fa-download" aria-hidden="true"></i>Download
              </button>
            </span>
            <span key="fileviewbtn_3">
              <button>
                <i className="fa fa-folder-open" aria-hidden="true"></i>Open in
              </button>
            </span>
            <span key="fileviewbtn_4">
              <button>
                <i className="fa fa-floppy-o" aria-hidden="true"></i>Save as..
              </button>
            </span>
            <span key="fileviewbtn_5">
              <button>
                <i className="fa fa-envelope" aria-hidden="true"></i>Add request..
              </button>
            </span>
            <span key="fileviewbtn_6">
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </span>
        </div>
      </nav>
    </>
  );
};

export default FileViewer;
