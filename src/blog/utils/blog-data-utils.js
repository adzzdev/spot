/**
 * Required for this to work is to pass the enter Blogs JSON.
 * @param {JSON} blogData 
 * @param {Array} blogIDs 
 */
export function getBlogs(blogData, blogIDs){
    /**
     * 1. Get Blog List from the data
     * 2. Filter the list based on the IDS
     * 3. Return the filtered Blogs
     */

    if(typeof blogData !== "object"){
        throw new TypeError("Blogs Data should be of type Object");
    }

    const blogList = blogData["data"]["blogs"];

    const filteredBlogList = blogList.filter(function(item){
        if(blogIDs.includes(item["id"])){
            return true;
        }else{
            return false;
        }
    });
    
    return filteredBlogList;
}