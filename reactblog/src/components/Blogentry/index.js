import React from 'react';
import './style.css';

class Blogentry extends React.Component {

    render() {
    
        return(
            
            <div className="card">
                <h3 className="card-header">{this.props.header}</h3>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.content}</p>
                    <a href="#" className="card-link">Learn More</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                <div className="card-footer text-muted">
                2 days ago
                </div>
            </div>
        
        
        );
    
    }

}


export default Blogentry;

