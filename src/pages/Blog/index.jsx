import React, {useState} from 'react'
import FeaturedCard from '../../blog/components/FeaturedCard'
import FeaturedHeader from '../../blog/components/FeaturedHeader'
import PartialBlogPreview from '../../blog/components/PartialBlogPeview'
import FullBlogPreview from '../../blog/components/FullBlogPreview'
import BlogPreviewFactory from '../../blog/BlogPreviewFactory'

import userService from '../../db/UserService'
import blogService from '../../db/BlogService'


export default function BlogIndex() {

  const [page, setPage] = useState(0);
  const blogMainInfo = blogService.getMainInfo();
  const mainBlog = blogService.getMainBlog()
  const featuredBlogs = blogService.getFeaturedBlogs();
  const blogs = blogService.getSortedPagedBlogsByDate("5");

  const featuredBlogsComponent = featuredBlogs.map(function(blog,i){
      return(
        <div className="col-md-6" key={i}>
          <FeaturedCard data={blog}></FeaturedCard>
        </div>
      )
  })
  let blogsComponent = [];
  if(blogs.length > 0){
    blogsComponent = blogs[page].map(function(blog, i,blogs){
        const author = userService.getUser(blog["author"],"userName");
        blog["authorDetails"] = author;

        const renderPreviewComponent = blog["preview"] === "full" ? <FullBlogPreview/> :
                                blog["preview"] === "partial" ? <PartialBlogPreview/> : <p>Nothing to show here...</p>
        const setDivider = (i < (blogs.length - 1)) ? true : false;
        return(
          <div key={i}>
            <BlogPreviewFactory component={renderPreviewComponent} data={blog} key={i}/>
            {setDivider ? <hr></hr> : ""}
          </div>
        )
    });
  }
  return (
      <>
    <main className="container mt-4">
      <FeaturedHeader data={mainBlog}></FeaturedHeader>
      <div className="row mb-2">
        {featuredBlogsComponent}
      </div>
    
      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Check these out
          </h3>

          {blogsComponent.length > 0 ? blogsComponent : <p>Nothing to show here...</p>}
          
          <nav className="blog-pagination" aria-label="Pagination">
            <a className={"btn btn-outline-secondary rounded-pill me-2" + (page === 0 ? " disabled" : "")} onClick={function(){setPage(page-1);document.documentElement.scrollTop = 0}}>Older</a>
            <a className={"btn btn-outline-primary rounded-pill" + ((page === blogs.length-1 || blogsComponent.length === 0) ? " disabled" : "")} onClick={function(){setPage(page+1);document.documentElement.scrollTop = 0;}}>Newer</a>
          </nav>
    
        </div>
    
        <div className="col-md-4">
          <div className="position-sticky" style={{top: "2rem"}}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">{blogMainInfo["about"]}</p>
            </div>
  
            <div className="p-4">
              <h4 className="fst-italic">Links</h4>
              <ol className="list-unstyled">
                <li><a href="https://github.com/adzzdev" target="_blank">GitHub</a></li>
                <li><a href="https://stackoverflow.com/users/9765927/adzz">Stack Overflow</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    
    </main>
    </>
  )
}
