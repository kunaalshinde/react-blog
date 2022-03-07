import React from 'react'
import Middle from '../../components/Middle'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar'
import '../../index.scss'

export default function Home() {
  return (
    <>
        <Middle />
    <div className='home'>
        <Posts />
        <Sidebar />
    </div>
    </>
  )
}
