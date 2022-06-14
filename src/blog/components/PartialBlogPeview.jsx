import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { BlogPreviewComp1 } from '../BlogPreviewComponents';

const NO_DATA = {
  topic: "World",
  title: "Post Title",
  dateCreated: new Date().toLocaleDateString(),
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  path: "sample",
  author: "adzz"
}

const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;
  :hover{
      transition:ease-in-out 0.2s;
      color: gray;
  }
`;
export default function PartialBlogPreview(props) {
  let data = NO_DATA;
  
  if(props.data && Object.keys(props.data).length > 0){
      data = props.data;
  }
  return (
    <article className="blog-post mb-4">
      <TitleLink href={`blog/${data["id"]}`} target={"_blank"}><h1 className="blog-post-title mb-1">{data["title"]}</h1></TitleLink>
      <BlogPreviewComp1 data={{
                                  dateCreated: data.dateCreated,
                                  userName: data["authorDetails"]["userName"],
                                  profileURL: data["authorDetails"]["profileURL"]
                                }}>                     
      </BlogPreviewComp1>
      <p>{data["shortDescription"]}</p>
    </article>
  )
}
