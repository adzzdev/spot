import { useState, useEffect } from "react";

/**
 * 
 * @param {String} filename 
 */
export default function useBlogMDFetch(filename){
    const [blogMarkdown, setBlogMarkdown] = useState("");
    useEffect(function(){
        import(`../../assets/markdown/blog/${filename}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setBlogMarkdown(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    },[]);

    return blogMarkdown
}