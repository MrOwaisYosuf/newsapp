import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5331f9c4eb434fec8e507bd39b9daee1&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews()
    }

    handlePrevClick = () => {
        this.setState(
            prevState => ({ page: prevState.page - 1 }),
            () => this.updateNews()
        );
    }

    handleNextClick = () => {
        this.setState(
            prevState => ({ page: prevState.page + 1 }),
            () => this.updateNews()
        );
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem source={element.source.name} title={element.title ? element.title <= 40 ? element.title : element.title.slice(0, 40) : ""} description={element.description ? element.description <= 80 ? element.description : element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                    {this.state.loading && <Spinner />}
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
