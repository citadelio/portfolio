import React , {createContext} from 'react'
import blogposts from "../blogposts.json";

export const BlogPostsContext = createContext();

 const BlogPostsContextProvider = ({children}) => {
    return (
        <BlogPostsContext.Provider value={blogposts} >
            {children}
      </BlogPostsContext.Provider>
    )
}

export default BlogPostsContextProvider