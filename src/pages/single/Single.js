import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar'
import SinglePost from '../../components/SinglePost'

export default class Single extends React.Component {
  
  render()
  {
    return (
      <div className="single">
          <SinglePost />
          {/* <Sidebar /> */}
      </div>
    )
  }
}
