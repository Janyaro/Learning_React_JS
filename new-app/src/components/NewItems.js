import React, { Component } from 'react';

export class NewItems extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ 
          width: "23rem" , 
          backgroundColor:this.props.mode==="black" ? "white" : "silver",
          color:this.props.mode==="black"?"black":"white"
        
         }}>
          <img
            src={this.props.imageUrl}
            className="card-img-top"
            alt="news"
            style={{
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.title != null
                ? this.props.title.slice(0, 30)
                : 'No Title'}
            </h5>
            <p className="card-text">
              {this.props.description != null
                ? this.props.description.slice(0, 80)
                : 'No Description'}
            </p>
            <a href={this.props.url || '/'} className="btn btn-primary" target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItems;
