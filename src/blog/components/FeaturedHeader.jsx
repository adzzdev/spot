import React from 'react'
import style from "../Blog.module.css"
import { Link } from "react-router-dom"
import img from "../../assets/img/sample-img.webp"
const NO_DATA = {
    title: "Title of a longer featured blog post",
    description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    path: "asd"
}
export default function FeaturedHeader(props) {
    let data = NO_DATA;
    if(props.data && Object.keys(props.data).length > 0){
        data = props.data;
    }
  return (
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className={`${style.display__4} fst-italic`}>{data["title"]}</h1>
          <p className="lead my-3">{data["shortDescription"]}</p>
          <p className="lead mb-0"><a href={"blog/" + data["path"]} target="_blank" className="text-white fw-bold">Continue reading...</a></p>
        </div>
    </div>
  )
}
