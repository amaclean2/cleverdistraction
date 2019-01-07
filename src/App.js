import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/main/header';
import Home from './components/main/home';
import Projects from './components/pages/projects';
import Blogs from './components/pages/blogs';
import Pictures from './components/pages/pictures';

class App extends Component {

  primaryContent() {
    return (
      <div id="Main/App"> 
        <Header />
        <div className="background-border"></div>
        <div className="page-content">
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/ideas' component={Header} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/pictures' component={Pictures} />
          <Route path='/about' component={Header} />
        </div>
      </div> );
  }

  render() {
    let content = this.primaryContent();
    return (
        <BrowserRouter>
          {content}
        </BrowserRouter>
    );
  }
}

export default App;
