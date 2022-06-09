import React from "react";
import moment from "moment";

const NODATA = {
        userName: "Anonymous",
        profileURL: "https://avatars.dicebear.com/api/identicon/anonymous.svg",
        dateCreated: new Date().toLocaleDateString()
}


export function BlogPreviewComp1(props) {
    const data = props.data ? props.data : NODATA;
  return (
    <div className="d-flex align-items-center mb-4 text-muted author-info">
      <a className="d-flex align-items-center text-muted text-decoration-none" href={`/user/${data["userName"]}`} target="_blank" rel="noopener">
        <img className="mb-0 me-2 rounded-2 p-1 shadow-sm" src={data["profileURL"]} alt="" width="25" height="25" />
        <span>@{data["userName"]}</span>
      </a>
      <span className="d-flex align-items-center ms-3" title={data["dateCreated"]}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="me-2" viewBox="0 0 16 16" role="img" fill="currentColor">
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
        </svg>

        {moment(data["dateCreated"]).fromNow()}
      </span>
    </div>
  );
}
