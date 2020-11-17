import React, {useState,useEffect, useContext} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {Link} from 'react-router-dom'
import {ProjectsContext} from '../context/projectsContext'

 const SingleProject = ({match}) => {
	
	 const projects = useContext(ProjectsContext)
     const [currentProject, setCurrentProject] = useState({})
     const [metaData, setmetaData] = useState('')
     const [processData, setprocessData] = useState('')
     const [componentLoaded, setComponentLoaded] = useState(false)
     useEffect(()=>{
		let thisProject;
		const projectName = match.params.id;
		projects.projects.map(project=>{
        if(project.name.toLowerCase() === projectName){
			thisProject = project;
			setCurrentProject({...project});
		}
		return thisProject;
	})
		const data =  thisProject.metadata.map((meta, index)=> (
				<React.Fragment key={index}>
				<h3 className="projectDesc--head">{meta.title}</h3>
				<p className="projectDesc--text">{meta.details}</p>
				</React.Fragment>
				))
				setmetaData(data);
		const processAll = thisProject.process.map((process, index) =>(
			<div className="col-md-4 col-6" key={index}>
				<div className="tiles">
					<h2>{index + 1}</h2>
					<span>{process}</span>
				</div>
			</div>
		))
				
		setprocessData(processAll);
				setComponentLoaded(true);
   

},[componentLoaded])
    return (
        <>
             <Header page="portfolio" />
             
             
	<section className="module page-head">
		<div className="mini-container">
			<p className="sub-head">
                <Link to="/portfolio">Go Back</Link>
            </p>
			<h1>{currentProject.tagline }</h1>
		</div>
	</section>

	<section className="projectDesc-wrapper">
		<div className="custom-container">
			<div className="project-banner single-project-banner" id="">
			{ componentLoaded ?
				<img className="" src={`/assets/images/portfolio/${currentProject.images[1]}`} alt={currentProject.name}/>
				: null
				}
			</div>

			<div className="projectDesc-content">
				<div className="mini-container">
					<h5 className="sub-head">About the project</h5>
					{metaData}
					<div className="process-tiles">
						<div className="row">
							<div className="col-md-3">
								<h3>Process</h3>
							</div>
							<div className="col-md-9">
								<div className="row">
									{processData}
								</div>
							</div>
						</div>
					</div>

					<div className="projectDesc-Details">
						<div className="row">
							<div className="col-md-6 project-info-wrap">
								<div className="single-portfolio-info">
									<h4>Role</h4>
									<p>{currentProject.role}</p>
								</div>
							</div>
							<div className="col-md-6 project-info-wrap">
								<div className="single-portfolio-info">
									<h4>Client</h4>
									<p>{currentProject.client}</p>
								</div>
							</div>
							<div className="col-md-6 project-info-wrap">
								<div className="single-portfolio-info">
									<h4>Date of Creation</h4>
									<p>{currentProject.date}</p>
								</div>
							</div>
							<div className="col-md-6 project-info-wrap">
								<div className="single-portfolio-info">
									<h4>Categories</h4>
									<p>{currentProject.categories}</p>
								</div>
							</div>
						</div>
					</div>

					<a className="btn btn-blue" target="_blank" rel="noopener noreferrer" href={currentProject.link}>Live Link</a>

				</div>
			</div>

		</div>
	</section>
             <Footer />
        </>
    )
}

export default SingleProject;