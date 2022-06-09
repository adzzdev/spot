import data from "../assets/data/blog.json";
import Blog from "./models/Blog";
import utilspart1 from "./utils/utility-part1";

const MAIN = data["data"]["main"];
const LINKS = data["data"]["links"];
const MAIN_BLOG_ID = data["data"]["mainBlogID"];
const FEATURED_BLOGS = data["data"]["featuredBlogIDs"];
const BLOGS = data["data"]["blogs"];

class BlogService{
    constructor(){
        this._sortedBlogsByDateDesc = BLOGS.sort((blogA, blogB) => {
            if(blogA.dateCreated > blogB.dateCreated){
                return -1;
            }else if(blogA.dateCreated < blogB.dateCreated){
                return  1;
            }else{
                return 0;
            }
        })
    }
    getMainInfo(){
        return MAIN;
    }
    getFeaturedBlogs(){
        return BLOGS.filter(function(blog,i, blogs){
            if(FEATURED_BLOGS.includes(blog.id)){
                return true
            }else{
                return false;
            }
        })
    };
    getMainBlog(){
        return this.getBlog(MAIN_BLOG_ID, "id");
    }
    getLinks(){
        return LINKS;
    }
    /**
     * 
     * @param {String} value 
     * @param {String} key 
     * @returns {Blog}
     */
    getBlog(value, key){
        const blog = BLOGS.find(function(blog){
            if(blog[key] === value){
                return true; 
            }
            return false;
        });
        return new Blog(blog);
    }

    getBlogs(top="5", options={
        main: true,
        feat: true,
        sort:{ by: "dateCreated", dir: "DESC" },
    }){
        
        let blogs = [];
        const service = this;

        const featIDList = service.getFeaturedBlogs().map(function(blog){
            return blog.id;
        })

        // in need of static typing HAHA
        if(!utilspart1.checkObjectProps(options.sort, ["by", "dir"])){
            throw new Error("Incorrect option defined for SORT");
        }else if(typeof options.main !== "boolean" && !typeof options.feat !== "boolean"){
            throw new TypeError("Option for MAIN or FEAT is not bool");
        }

        //start logic here...

        const excludedIDs = [];

        
        if(options.main && options.feat){
            if(top === "*"){
                blogs = BLOGS;
            }else{
                blogs = BLOGS.slice(0, Number(top));
            }
        }
        if(!options.feat){
            this.getFeaturedBlogs().map((blog)=>{
                excludedIDs.push(blog.id);
            });
        }
        if(!options.main){
            excludedIDs.push(this.getMainBlog().id);
        }

        
        if(top==="*"){
            blogs = BLOGS.filter(function(blog){
                if(excludedIDs.includes(blog.id)){
                    return false;
                }
                return true;
            });
        }else{
            for(let i = 0; i < BLOGS.length; i++){
                if(blogs.length === Number(top)){
                    break;
                }else{
                    const blog = BLOGS[i];
                    if(!excludedIDs.includes(blog.id)){
                        blogs.push(blog)
                    }  
                }
            }
        }
        return blogs.sort(function(blogA, blogB){
            const sortDir = options.sort.dir.toLowerCase();
            if(blogA[options.sort.by] > blogB[options.sort.by]){
                if(sortDir === "asc"){
                    return 1
                }else{
                    return -1
                }
            }else if(blogA[options.sort.by] < blogB[options.sort.by]){
                if(sortDir === "asc"){
                    return -1
                }else{
                    return 1
                }
            }else{
                return 0;
            }
        });
    }   
    
    getSortedPagedBlogsByDate(pageSize="5"){
        const blogPages = [];
        const size = Number(pageSize);
        const blogs = this._sortedBlogsByDateDesc.filter((blog)=>{
            const featuredBlogIDs = this.getFeaturedBlogs().map((blog)=>{
                return blog.id;
            });
            if(this.getMainBlog().id === blog.id || featuredBlogIDs.includes(blog.id)){
                return false;
            }else{
                return true;
            }
        });
        let temp = [];
        blogs.forEach(function(blog, i){
            temp.push(blog);
            if(((i+1)%Number(pageSize) === 0 && i!=0) || (i === blogs.length-1)){
                const paged = temp.slice(0, temp.length);
                blogPages.push(paged);
                temp = [];
            }
        });
        return blogPages;
    }
    getAllBlogs(){
        return BLOGS;
    }
}


const blogService = new BlogService();

export default blogService;

