import React, {useContext} from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import BlogPostTile from "./BlogPostTile"
import {BlogPostsContext} from '../context/blogpostsContext'
const Home = () => {
	const {posts} = useContext(BlogPostsContext);
    return (
        <>
          
            <Header stroke='header-clip' page='home' />

    <section className="intro-section">
		<div className="custom-container">
			<div className="section-head">
				<h1>I build scalable digital solutions.</h1>
				<p className="section-text">Hussein is a software engineer with a knack for creating engaging and immersive experience on the Web and on Mobile.</p>
				<div className="intro-btns">
					<Link to="/about" className="btn btn-blue more-abt">More about me</Link>
					<Link to="/portfolio" className="btn btn-link">See my Portfolio</Link>
				</div>

			</div>

			<div className="hero-social">
				<ul className="d-flex">
                <li className="flex-fill">
						<a href="https://github.com/citadelio" target="_blank" className="ease-3">
							<i className="fab fa-github ease-3"></i>
							<span>Github</span>
						</a>
					</li>

					<li className="flex-fill">
						<a href="https://twitter.com/sudo_hussein" target="_blank" className="ease-3">
							<i className="fab fa-twitter ease-3"></i>
							<span>Twitter</span>
						</a>
					</li>
					
					<li className="flex-fill">
						<a href="https://www.facebook.com/Warrake.H" target="_blank" className="ease-3">
							<i className="fab fa-facebook ease-3"></i>
							<span>Facebook</span>
						</a>
					</li>
					
                    <li className="flex-fill">
						<a href="https://wa.me/2349039951233?text=Hi%20Hussein,%20I'm%20coming%20from%20your%20personal%20website%20-ENTER%20YOUR%20MESSAGE%20HERE-" target="_blank" className="ease-3">
							<i className="fab fa-whatsapp ease-3"></i>
							<span>Whatsapp</span>
						</a>
					</li>
				
					
					
				</ul>
			</div>

		</div>
	</section>

{
	posts.length > 0
	?(
<section className="" style={{backgroundColor:"ghostwhite", padding:"50px 0"}}>
		<div className="custom-container">
			<div className="about-desc">
				<div className="row">
					<div className="col-md-12" >
						<h3 className="" style={{fontWeight:300}}>I write too...</h3>
					</div>
					<div className="col-md-12">
						<ul>
							{
								posts.map((post, key)=> key < 5 ?(
									<BlogPostTile key={key} url={post.url} title={post.title} body={post.body}/>
								): "")
							}
							
							
							
						</ul>
						    <Link to="/blog"> <button className="btn btn-blue btn-contact" type="button">See more blogposts</button> </Link>
					</div>
				</div>
			</div>

</div>
</section>
	)
	:
	null
}
	
    
<Footer/>
        </>
    )
}

export default Home;