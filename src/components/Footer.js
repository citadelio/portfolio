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
							<img alt="" src="/hussein-logo64.PNG" style={{width:30, marginRight:3}}/>
							<span>Software Engineer | Tech Enthusiast | Gadget Lover</span>
						</p>
						{/* <p>&#169; {(new Date()).getFullYear()} Hussein Warrake</p> */}
					</div>
				</div>
				<div className="col-md-6">
					<div className="footer-social text-right">
						<ul className="list-inline">
							<li className="list-inline-item">
								<a href="tel:2349039951233" style={{fontSize:16}}> 
									(234) 903 9951 233
								</a>
							</li>
							<span className="hide-on-xs">|</span>
							<li className="list-inline-item">
								<a href="mailto:husseinwarrake@gmail.com" style={{fontSize:16}}>
									husseinwarrake@gmail.com
								</a>
							</li>
							
                            
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