import React from 'react'
import '../index.scss'
import store from '../store/store';
import Blog from './Blog';
import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//   return {
//     blogs: state.posts.blogs
//   }
// }

export default class Blogs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }
  
  // // Components are rendered to the DOM for the fisrt time
  // componentDidMount() {
  //   const fetchAllBlogs = async () => {
  //     const res = await fetchBlogs()
  //     console.log(res);
  //   }
  //   fetchAllBlogs();
  // }

  componentDidUpdate = (prevProps) => {
    if(this.props.blogs !== prevProps.blogs) {
      this.setState({blogPosts: this.props.blogs});
    }
  }

  // // Components are removed from DOM 
  // componentWillUnmount() {

  // }

  render()
  { 
    return (
        <div className='blogs'>
          { this.state.blogPosts.map((post, index) => (
            <Blog 
              key={index} 
              index={index} 
              post={post}
            />
            )) } 
        </div>
    );
  }
}

// export default connect(mapStateToProps, { GetAll })(Blogs)