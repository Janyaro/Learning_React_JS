import React, { Component } from 'react';
import NewItems from './NewItems';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  async updateNew () {
const url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-05-15&sortBy=publishedAt&apiKey=ff0350b458644ba5a54dbe1be2ccad19&page=1&pageSize=15';
    this.setState({
      loading:true
    })
    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({
      articles: parseData.articles || [],
      totalResults: parseData.totalResults || 0,
      loading:false
    });
  }
  async componentDidMount() {
    this.updateNew();
  }

  onPreviousHandler = async () => {
    if (this.state.page <= 1) return;
    this.setState({
      page:this.state.page - 1
    })
  this.updateNew();
  }
    

  onNextHandler = async () => {
    const totalPages = Math.ceil(this.state.totalResults / 15);
    const nextPage = this.state.page + 1;

    if (nextPage > totalPages) return;
   this.setState({
    page:this.state.page + 1
   })
   this.updateNew();
  
  }

  render() {
    return (
      <div className="container">
        <p className="h4 mb-4 my-3">Welcome to the global news channel</p>
        {this.state.loading &&  <Spinner/>}
        <div className="row">
          {this.state.articles.length > 0 ? (
            this.state.articles.map((element, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <NewItems
                  mode={this.props.mode}
                  url={element.url}
                  imageUrl={element.urlToImage || "https://kor.ill.in.ua/m/1260x900/4328703.jpg"}
                  title={element.title || "No Title"}
                  description={element.description || "No Description"}
                />
              </div>
            ))
          ) : (
            <div className="text-center col-12">No articles available.</div>
          )}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.onPreviousHandler}
            className="btn btn-primary"
          >
            Previous
          </button>

          <button
            type="button"
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 15)}
            onClick={this.onNextHandler}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
