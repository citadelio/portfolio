import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <React.Fragment>
          
            <Header stroke='header-clip' page='home' />

    <section className="intro-section">
		<div className="custom-container">
			<div className="section-head">
				<h1>I build scalable digital solutions.</h1>
				<p className="section-text">Hussein is a Software developer with a knack for creating engaging and performant web applications posessing the very best of aesthetics and functionality. </p>
				<div className="intro-btns">
					<Link to="/about" className="btn btn-blue more-abt">More about me</Link>
					<Link to="/portfolio" className="btn btn-link">See my Portfolio</Link>
				</div>

			</div>

			<div className="hero-social">
				<ul className="d-flex">
                <li className="flex-fill">
						<a href="https://github.com/citadelio" className="ease-3">
							<i className="fab fa-github ease-3"></i>
							<span>Github</span>
						</a>
					</li>
					<li className="flex-fill">
						<a href="https://www.facebook.com/Warrake.H" className="ease-3">
							<i className="fab fa-facebook ease-3"></i>
							<span>Facebook</span>
						</a>
					</li>
					<li className="flex-fill">
						<a href="https://twitter.com/Citadel50" className="ease-3">
							<i className="fab fa-twitter ease-3"></i>
							<span>Twitter</span>
						</a>
					</li>
                    <li className="flex-fill">
						<a href="https://wa.me/2349039951233?text=Hi%20Hussein,%20I'm%20coming%20from%20your%20personal%20website%20-ENTER%20YOUR%20MESSAGE%20HERE-" className="ease-3">
							<i className="fab fa-whatsapp ease-3"></i>
							<span>Whatsapp</span>
						</a>
					</li>
				
					
					
				</ul>
			</div>

		</div>
	</section>

    
<Footer/>
        </React.Fragment>
    )
}

export default Home;