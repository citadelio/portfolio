import React, {useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from 'react-router-dom'
import {ProjectsContext} from '../context/projectsContext'

const Portfolio = () => {
	const {projects} = useContext(ProjectsContext);
  return (
    <>
      <Header page="portfolio" />
      <section className="module page-head portfolio-banner">
        <div className="mini-container">
          <p className="sub-head">Portfolio</p>
          <h1>Some projects I've worked on.</h1>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <ul className="list-items-container portfolio-grid" style={{marginTop:0}}>
				{projects.map(
		project => (
					<li className="list-item" key={project.id} data-groups="all slideshow">
					<Link to={`/portfolio/${encodeURI((project.name).toLowerCase())}`}>
					  <div className="list-item-img">
						<img src={`/assets/images/portfolio/${project.images[0]}`} alt={`${project.images[0]}`} />
					  </div>
					  <div className="figcaption">
						<div className="caption-inner">
						  <h3 className="portfolio-item-title">{project.name}</h3>
						  <div className="portfolio-item-desc">{project.short_desc}</div>
						</div>
					  </div>
					</Link>
				  </li>
				)
	)}
          </ul>
        </div>
      </section>

      <Footer />
			</>
  );
};

export default Portfolio;
