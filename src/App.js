import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import SingleProject from './components/SingleProject'
import ProjectsContextProvider from './context/projectsContext'

const App = () => {
  return (
   
    <Router>
      {/* <Switch> */}
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <ProjectsContextProvider>
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/portfolio/:id" component={SingleProject}/>
          </ProjectsContextProvider>
          <Route path="/blog" component={Blog}/>
      {/* </Switch> */}
    </Router>
    
  );
}

export default App;
