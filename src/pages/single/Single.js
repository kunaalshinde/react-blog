import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar'
import SinglePost from '../../components/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}
