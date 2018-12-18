import React, { Component } from 'react';

class Blogs extends Component {

  	render() {
    	return (
      		<div className="pages blogs">
        		<h2>What's Happening</h2>
        		<div className="content">
        			<span className="link-title">Check It Out</span>
              <p>Code, Music, and Climbing <br />
              This is text to fill out a couple lines of a paragraph. I need to understand what it is supposed to look like when I fill this place with some text.</p>
              <a rel="noopener noreferrer" target="_blank" href="https://clever-distraction-blog.firebaseapp.com" className="blog-button button">Take A Look</a>
        		</div>
      		</div>
    	);
  	}
}

export default Blogs;
