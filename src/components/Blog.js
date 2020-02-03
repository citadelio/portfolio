import React,{useContext} from 'react'
import Header from './Header'
import Footer from './Footer'
import {ReactComponent as Illustration} from '../blog-under-development.svg'
import {Link} from 'react-router-dom'
import {BlogPostsContext} from '../context/blogpostsContext'
import BlogPostTile from "./BlogPostTile"


const Blog = () => {
    const {posts} = useContext(BlogPostsContext);
    return (
        <>
            <Header page='blog'/>
             <section className="blog-wrapper">
                    <div className="custom-container">
                        <div className="row align-items-center">
                        <div className="col-md-5 col-md-push-7">
                                <div className="page-head">
                                    <p className="sub-head"> Welcome to my thought process</p>
                                    <h1>Good reads ahead</h1>
                                   <p style={{margin:"50px 0 0 0", textAlign:"justify"}}>
                                    I write about all things technology, programming and every other stuff related to computers
                                    </p>
                                 
                                </div>
                            </div>

                        <div className="col-md-7 col-md-pull-5">
                                <div className="contact-img sent">
                                    <Illustration className="contact-svg-illustration"/>
                                </div>	
                            </div>

                             
                           
                        </div>
                    </div>

                 
                </section>
                <section className="" style={{backgroundColor:"ghostwhite", padding:"50px 0"}}>
		<div className="custom-container">
			<div className="about-desc">
				<div className="row">
					<div className="col-md-12">
						<ul>
							{
								posts.map((post, key)=>(<BlogPostTile key={key} url={post.url} title={post.title} body={post.body}/>
								))
							}
						</ul>
					</div>
				</div>
			</div>

</div>
</section>
            <Footer/>
        </>
    )
}

export default Blog;