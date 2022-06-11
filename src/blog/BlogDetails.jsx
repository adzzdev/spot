import {useParams} from "react-router-dom"
import blogService from "../db/BlogService";
import userService from "../db/UserService";
import Markdown from "markdown-to-jsx"
import { BlogPreviewComp1 } from "./BlogPreviewComponents";
import UserInfo from "./components/UserInfo";
import SyntaxHighlighter from "./components/SyntaxHighlighter";


import useBlogMDFetch from "../lrn-hooks/hooks/useBlogMDFetch";
import AuthorInfo from "./components/AuthorInfo";

export default function BlogDetails() {
    let { id } = useParams();
    const blog = blogService.getBlog(id, "id");
    const author = userService.getUser(blog.author, "userName");

    const blogMD = useBlogMDFetch(blog.markdownLocal);
  return (
    <div className="container-fluid mt-4">
        <div className="row">
        <div className="col-xl-8">
    <article className="blog-post mb-4">
      <h1 className="blog-post-title mb-1">{blog.title}</h1>
        <BlogPreviewComp1 data={{
                                    dateCreated: blog.dateCreated,
                                    userName: author.userName,
                                    profileURL: author.profileURL
                                    }}>                     
        </BlogPreviewComp1>
        {(blog.shortDescription && !blog.markdownLocal) ? <p>{blog.shortDescription}</p> : ""}
        <div>
            <Markdown options={{
                overrides: {
                    CodeBlock: {
                        component: SyntaxHighlighter
                    }
                }
            }}>
                {blogMD}
            </Markdown>
        </div>
        </article>
    </div>
    
    <div className="col-xl-4" >
        {/* <UserInfo author={{value: author.userName, key: "userName"}}></UserInfo> */}
        <AuthorInfo author={{value: author.userName, key: "userName"}}></AuthorInfo>
    </div>
        </div>
    
    </div>
  )
}
