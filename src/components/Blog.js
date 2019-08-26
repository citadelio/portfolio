import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {ReactComponent as Illustration} from '../blog-under-development.svg'
import {Link} from 'react-router-dom'

const Blog = () => {
    return (
        <React.Fragment>
            <Header page='blog'/>c
             <section className="blog-wrapper">
                    <div className="custom-container">
                        <div className="row align-items-center">
                        <div className="col-md-7">
                                <div className="contact-img sent">
                                    <Illustration className="contact-svg-illustration"/>
                                </div>	
                            </div>

                            <div className="col-md-5">
                                <div className="page-head">
                                    <p className="sub-head"> Errr... My Blog isn't ready yet </p>
                                    <h1>I'm still working on it</h1>
                                    <p style={{margin:"50px 0 0 0", "text-align":"justify"}}>
                                    Meanwhile, you can take a look at some of the projects I have worked on recently.
                                    </p>
                                    <Link to="/portfolio"> <button className="btn btn-blue btn-contact" type="button">See my Portfolio</button> </Link>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                 
                </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Blog;