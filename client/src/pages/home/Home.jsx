import React from 'react'
import Middle from '../../components/Middle'
import Blogs from '../../components/Blogs'
import '../../index.scss'

export default function Home() {
  return (
    <>
      <Middle />
      <div className='home'>
        <Blogs />
      </div>
    </>
  )
}
