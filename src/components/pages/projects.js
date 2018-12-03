import React, { Component } from 'react';

class Projects extends Component {

  	render() {
    	return (
      		<div className="pages projects">
        		<h2>Projects</h2>
        		<div className="content-container">
        			<div className="content">
	        			<div className="link-card">
	        				<div className="link-content toolbox"></div>
		        			<a className="link-desc" href="http://toolboxproject.io" target="_blank">
		        				<span className="link-title" >Toolbox -</span><br />
		        				is a project to organize and visualize the production of machine shops.<br />
		        				Bringing a UI focus to shop management could revolutionize the industry.
		        			</a>
	        			</div>
	        			<div className="link-card">
	        				<div className="link-content lesson-box"></div>
		        			<a className="link-desc" href="http://amaclean2.github.io" target="_blank">
		        				<span className="link-title" >The Lesson Box</span><br />
		        				Lets make it as easy as possible to get started in programming.<br />
		        				The Lesson Box is a set of daily lessons building coding skills in Python.
		        				(I gotta keep up)
		        			</a>
	        			</div>
	        			<div className="link-card">
	        				<div className="link-content devfest"></div>
		        			<a className="link-desc" href="http://devfestsf.com" target="_blank">
		        				<span className="link-title" >Devfest -</span><br />
		        				is a meet-up to educate young developers in technologies and opportunities in the programming world.
		        			</a>
	        			</div>
	        		</div>
        		</div>
      		</div>
    	);
  	}
}

export default Projects;
