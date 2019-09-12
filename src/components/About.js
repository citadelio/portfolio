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
                    <p className="about-mantra">I am passionate about computer programming. It’s the one thing I think I could do for free. </p>

					<p>Cool technologies, cooler gadgets, processing power, plenty of RAM, a clear plan, internet access, headphones and it’s a party for me! </p>
					
					<p>I love to take code to production… I love the ‘god’ feeling I get when I see someone served by my innovation.
					</p>

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
						<h2 className="mb-5">About Hussein</h2>
					</div>
					<div className="col-md-8">
						<p>I'm a Software developer based in Port Harcourt, Nigeria.</p>
						
						<p> Growing up during the early years of broadband penetration in Nigeria, My Dad had just got this new mobile phone with a 2G internet connection. I'll frequently take his phone without his knowledge and surf through myriads of contents on the internet (Most time's I got busted when the phone rings, until I learnt there was a mute setting). That little feature phone pricked my interest for Technology, the Internet and Softwares </p>
						<br/>
						<p>
							Several years later, I had gotten myself a PC, taught myself to code, and was fascinated by how powerful technology can be in changing how people live their lives. Today, I am helping drive that change by creating truly engaging and user centered experiences on the Web. 
						</p>
						<br/>
						<p>
							One of such technologies that endears to me is the development of Progressive Web Apps <b>(PWA's)</b>. PWA's are Fast, Lightweight, Engaing, Installable without taking much disk space, can work offline and allows for push messaging. Thus it is indeed the technology that'll be adopted by most of the <b>Next Billion Users</b> to come online. 
						</p>
					</div>
				</div>
			</div>

			<div className="about-tiles about-services">
				<div className="row">
					<div className="col-md-4">
						<h2 className="mb-5">What I do</h2>
					</div>
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6">
								<h3 className="mb-3">Web Development</h3>
								<p className="mb-5">I build responsive websites that are highly perfomant and scalable</p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Social Media Marketing</h3>
								<p className="mb-5">Giving you brand visibility and online presence </p>
							</div>
							<div className="col-md-6">
								<h3 className="mb-3">Product Design</h3>
								<p className="mb-5">So, I'm gradually making a transition into product design, basically because it is important for businesses to build customer centered products that meets the uderlying needs that these customers dont even know they have until they see such products.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="about-tiles about-skills">
				<div className="row">
					<div className="col-md-4">
						<h2 className="mb-5">Tech Skills</h2>
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
                            	
							<div className="col-sm-3 col-6">
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