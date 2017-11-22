import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Blogentry from './components/Blogentry';
import posts from './data/posts.js';

class App extends Component {
    state = {
        currentPost: posts[1]
    };

  render() {
    return (
        <div>
            <Navbar sitename={'reactBlog'} links={['home', 'features']}/>
            <div className="container">

                <div className="row">
                    <div className = "col-9">
                        <Blogentry 
                            header={this.state.currentPost.header} 
                            title={this.state.currentPost.title}
                            content={this.state.currentPost.content}                           
                        />
                    </div>
                
                    <div className="col-3">
                    </div>  
                </div>
            </div>
        </div>
       
	    
    );
  }
}

export default App;
