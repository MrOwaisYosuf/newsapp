import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { source, title, description, imgUrl, url, author, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span>
                    <img src={imgUrl ? imgUrl : "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>{author && <>By: {author}<br /></>}{date.slice(0, 10)}</small></p>
                        <a href={url} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
