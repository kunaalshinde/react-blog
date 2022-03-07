import React from 'react'
import image from '../images/backgro.jpeg'

export default function Post() {
  return (
      <div className="post">
        <img src={image} className="post-image" alt="" />
        <div className='post-info'>
          <div className="postcats">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
          </div>
          <span className="post-title">Post Title</span>
          <hr />
          <span className="post-date">7 hours ago</span>
        </div>
        <p className="post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi suscipit, quod modi odio molestias beatae, perferendis quas esse maiores doloremque omnis quo vitae sequi ea blanditiis minus, veritatis eius!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore velit aperiam recusandae ad blanditiis tenetur molestiae enim quia? Corporis ducimus veniam sapiente numquam natus aut libero dolorum, explicabo itaque mollitia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui eius itaque, quae quasi et, aliquid doloremque quam asperiores eligendi fugit eveniet sequi aperiam debitis possimus at ipsam, minima aliquam?
        </p>
      </div>
  )
}
