import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/backgro.jpeg'

export default class Blog extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      index: this.props.index,
      post: this.props.post,
    }
  }
  render()
  {
    return (
      <Link 
        to={`/blogs/${this.state.post._id}`}
        className='link'
        >
        <div className="blog">
          <img src={this.state.post.imageURL ? this.state.post.imageURL : image} 
            className="blog-image" alt="" />
          <div className='blog-info'>
            <span className="blog-title">{this.state.post.title}</span>
            <hr />
            <span className="blog-date">{new Date(this.state.post.createdAt).toDateString()}</span>
          </div>
          <p className="blog-desc">{this.state.post.body}</p>
        </div>
      </Link>
    )
  }
}
