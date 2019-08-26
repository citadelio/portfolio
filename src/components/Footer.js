import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            	<footer>
		<div className="custom-container">
			<div className="row align-items-center">
				<div className="col-md-6">
					<div className="copyright">
						<p className="footerLogo">
							<img alt="" src="/hussein-logo64.PNG" style={{width:50}}/>
							<span>Port Harcourt, Nigeria.</span>
						</p>
						{/* <p>&#169; {(new Date()).getFullYear()} Hussein Warrake</p> */}
					</div>
				</div>
				<div className="col-md-6">
					<div className="footer-social text-right">
						<ul className="list-inline">
							<li className="list-inline-item"><a href="https://github.com/citadelio"><i className="fab fa-github"></i></a></li>
							<li className="list-inline-item"><a href="https://www.facebook.com/Warrake.H"><i className="fab fa-facebook"></i></a></li>
							<li className="list-inline-item"><a href="https://twitter.com/Citadel50"><i className="fab fa-twitter"></i></a></li>
							<li className="list-inline-item"><a href="https://wa.me/2349039951233?text=Hi%20Hussein,%20I'm%20coming%20from%20your%20personal%20website%20-ENTER%20YOUR%20MESSAGE%20HERE-"><i className="fab fa-whatsapp"></i></a></li>
                            
                            
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
        </React.Fragment>
    )
}

export default Footer; 