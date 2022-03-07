import React from 'react'
import '../../index.scss'
import background from '../../images/snow-forrest.jpg'

export default function Write() {
  return (
    <div className='write'>
        <form  className='write-form' >
            <img src={background} className='write-image' />
            <div className="writeform-group">
                <label htmlFor="fileinput">
                    <i class="write-icon fa-solid fa-folder-plus"></i>
                </label>
                <input type="file" id='fileinput' style={{display: "none"}} />
                <input type="text" placeholder='Title' className='write-input' autoFocus={true} />
            </div>
            <div className="writeform-group">
                <textarea className="write-input-text" placeholder='Write your blog' ></textarea>
            </div>
                <button className="write-submit">Publish</button>
        </form>
    </div>
  )
}
