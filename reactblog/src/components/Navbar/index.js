import React from 'react';
import './style.css';

class Navbar extends React.Component {
		
	render() {
		return(
              
                  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                      <a className="navbar-brand" href="#">{this.props.sitename}</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarColor01">
                          <ul className="navbar-nav mr-auto">
                              
                              {this.props.links.map((item, index) => {
                                  return (
                                      <li key={index} className={"nav-item " +(index === 0? 'active': "" )}>
                                          <a className="nav-link" href="#">{item}{index === 0? <span className="sr-only">(current)</span>: null }</a>
                                      </li>                                  
                                  )                                  
                              })                                
                              }
                          </ul>
                      </div>
                  </nav>
               			
		);
	}
}

export default Navbar;