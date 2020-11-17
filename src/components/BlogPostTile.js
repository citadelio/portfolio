import React from 'react'

const BlogPostTile = ({url, title, body}) => {
    return (
<li className="pb-5 pt-5 tileList">
    <a href={url} target="_blank" rel="noopener noreferrer"> 
        <h2>{title}</h2>
    </a>
        <p>
            {body}
        </p>
  
</li>
)
}
export default BlogPostTile;