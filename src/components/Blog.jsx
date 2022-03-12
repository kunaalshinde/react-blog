import React from 'react'
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
      <div className="blog">
        <img src={image} className="blog-image" alt="" />
        <div className='blog-info'>
          <span className="blog-title">{this.state.post.title}</span>
          <hr />
          <span className="blog-date">{this.state.post.time}</span>
        </div>
        <p className="blog-desc">{this.state.post.body}</p>
      </div>
    )
  }
}
