import React from 'react'
import moment from 'moment';
import {Link} from 'react-router-dom'
const NO_DATA = {
    topic: "World",
    title: "Post Title",
    datePosted: new Date().toLocaleDateString(),
    shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    path: "sample"
}
export default function FeaturedCard(props) {
    let data = NO_DATA;
    let thumbnail = (
        <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img" width="200" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
        </div>
    )
    if(props.data && Object.keys(props.data).length > 0){
        data = props.data;
        if(data.thumbnail)
        thumbnail = (   
            <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
            </div>
        )
    }
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{height: "100%"}}>
        <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">{data["topic"]}</strong>
            <h3 className="mb-0">{data["title"]}</h3>
            <div className="mb-1 text-muted">{moment(data["dateCreated"]).fromNow()}</div>
            {/* <p className="card-text mb-auto">{data["shortDescription"]}</p> */}
            <Link to={data["path"]} className="stretched-link">Continue reading</Link>
        </div>
        {thumbnail}
    </div>
  )
}
