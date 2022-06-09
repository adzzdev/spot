

class Blog{
    /**
     * 
     * @param {String} id 
     * @param {String} title 
     * @param {String} shortDescription 
     * @param {String} author 
     * @param {String} path 
     * @param {String} topic 
     * @param {Array} tags 
     * @param {Date} dateCreated 
     * @param {String} markdown 
     * @param {String} markdownLocal 
     * @param {String} preview 
     */
    constructor(id, title, shortDescription, author, 
                    path, topic, tags, dateCreated,
                    markdown, markdownLocal, preview
    ){
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.author = author;
        this.path = path;
        this.topic = topic;
        this.tags = tags;
        this.dateCreated = dateCreated;
        this.markdown = markdown;
        this.markdownLocal = markdownLocal;
        this.preview = preview;
    }
}

export default class{
    /**
     * 
     * @param {Blog} blog 
     */
    constructor(blog){
        this.id = blog.id;
        this.title = blog.title;
        this.shortDescription = blog.shortDescription;
        this.author = blog.author;
        this.path = blog.path;
        this.topic = blog.topic;
        this.tags = blog.tags;
        this.dateCreated = blog.dateCreated;
        this.markdown = blog.markdown;
        this.markdownLocal = blog.markdownLocal;
        this.preview = blog.preview;
    }

    getAuthor(userName){
        
    }
}