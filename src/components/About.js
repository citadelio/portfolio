import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = () => {
    return (
        <React.Fragment>
            <Header page='about'/>
            <section className="module page-head">
                <div className="mini-container">
                    <p className="sub-head" style={{textTransform:"inherit"}}>A little about me</p>
                    <p className="about-mantra">I love creating <b style={{fontWeight:600}}>fast</b> and <b style={{fontWeight:600}}>engaging</b> experiences on the web. That explains my love for <b style={{fontWeight:600}}>PWA's</b>.</p>
                </div>
            </section>


	<section className="about-wrapper">
		<div className="custom-container">
			<div className="about-banner" id="parallax">
				<img className="d-none" src="/assets/images/husseinwarrake.jpg" alt="Hussein Warrake"/>
			</div>


			<div className="about-tiles about-desc">
				<div className="row">
					<div className="col-md-4">
						<h2 className="mb-5">About</h2>
					</div>
					<div className="col-md-8">
						<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Raw denim you probably haven't heard of them jean shorts Austin.</p>
					</div>
				</div>
			</div>

			<div className="about-tiles about-services">
				<div className="row">
					<div className="col-md-4">
						<h2 className="mb-5">Services</h2>
					</div>
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6">
								<h3 className="mb-3">Graphic Design</h3>
								<p className="mb-5">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Web Development</h3>
								<p className="mb-5">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Media Marketing</h3>
								<p className="mb-5">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Advertising</h3>
								<p className="mb-5">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Game Development</h3>
								<p className="mb-5">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Analytics</h3>
								<p className="mb-5">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="about-tiles about-skills">
				<div className="row">
					<div className="col-md-4">
						<h2 className="mb-5">Skills</h2>
					</div>
					<div className="col-md-8">
						<div className="row">
							
							<div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-html5"></i>
									<span>HTML5</span>
								</div>
							</div>
							<div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-css3-alt"></i>
									<span>css3</span>
								</div>
							</div>
							<div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-js"></i>
									<span>Javascript</span>
								</div>
							</div>
                            <div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-bootstrap"></i>
									<span>bootstrap</span>
								</div>
							</div>
						
							<div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-react"></i>
									<span>React</span>
								</div>
							</div>
							<div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-node-js"></i>
									<span>Node Js</span>
								</div>
							</div>
                            	
							<div className="col-sm-3 col-6" style={{color:"red"}}>
								<div className="tiles">
									<i className="fab fa-php"></i>
									<span>PHP</span>
								</div>
							</div>
                            	
							<div className="col-sm-3 col-6">
								<div className="tiles">
									<i className="fab fa-laravel"></i>
									<span>Laravel</span>
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
            <Footer/>
        </React.Fragment>
    )
}

export default About;