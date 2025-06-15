import React, { Component } from 'react';
import NewItems from './NewItems';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-05-15&sortBy=publishedAt&apiKey=ff0350b458644ba5a54dbe1be2ccad19&page=1&pageSize=15';
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles, // ✅ fix typo here
    });
  }
 
   onPreviousHandler = async() =>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-05-15&sortBy=publishedAt&apiKey=ff0350b458644ba5a54dbe1be2ccad19&page=${this.state.page - 1}&pageSize=15
`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page : this.state.page - 1,
      articles: parseData.articles, 
    })
   }
   onNextHandler =async () =>{
    console.log("Next")
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-05-15&sortBy=publishedAt&apiKey=ff0350b458644ba5a54dbe1be2ccad19&page=${this.state.page + 1}&pageSize=15
`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page : this.state.page + 1,
      articles: parseData.articles, 
    })
   }
  render() {
    return (
      <div className='container' >
        <p className="h4 mb-4 my-3">Welcome to the global news chanel </p>
        <div className="row">
          {this.state.articles.map((element, index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <NewItems 
                   mode={this.props.mode}
                  url={element.url}
                  imageUrl={element.urlToImage || "https://kor.ill.in.ua/m/1260x900/4328703.jpg"}
                  title={element.title || "No Title"}
                  description={element.description || "No Description"}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button type="button" disabled={this.state.page <= 1} onClick={this.onPreviousHandler} class="btn btn-primary">Previous</button>
          <button type="button" onClick={this.onNextHandler} class="btn btn-primary">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
