import React from 'react'
import back from '../images/backgro.jpeg'

export default function SinglePost() {
  return (
    <div className='singlepost'>
        <div className="singlepost-wrapper">
            <img src={back} className="singlepost-image" alt="" />
            <h1 className="singlepost-title">
                Title title title title title
                <div className="singlepost-edit">
                    <i className="singlepost-icon fa-solid fa-pen-to-square"></i>
                    <i className="singlepost-icon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlepost-info">
                <span className="singlepost-author"><b>Kunal</b></span>
                <span className="singlepost-data">1 hour ago</span>
            </div>
            <div>
                <p className="singlepost-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis corrupti fugiat earum delectus pariatur excepturi suscipit voluptatem in laudantium, quam laborum impedit quae voluptates vero facilis. Quod, numquam reiciendis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, est excepturi tempore distinctio adipisci veniam at ex impedit, quisquam explicabo harum perspiciatis. Molestiae natus eum ratione earum iusto? Aut, laborum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius asperiores totam pariatur ipsam animi suscipit possimus officiis atque sit! Ad impedit vitae totam illum fugiat. Provident ut sit sint.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in nobis magnam nihil consequuntur numquam veritatis aperiam porro possimus quia eos incidunt voluptatem fuga labore inventore id, dolorem hic animi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit corporis excepturi architecto, ex quod assumenda dolorem quis ut. Architecto a reiciendis nam! Voluptates officia veniam quo debitis consequuntur laboriosam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta temporibus impedit hic? Ea amet mollitia nihil numquam eum cupiditate. Voluptas, quae quia voluptatibus reiciendis obcaecati ipsam impedit laborum nostrum?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste explicabo impedit ratione rerum. Cum sunt tenetur ipsa, laboriosam voluptatem saepe modi nulla rem pariatur, sed ea quo temporibus quas asperiores?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium pariatur, temporibus ipsum explicabo recusandae exercitationem eum voluptatum cumque reprehenderit quisquam nisi laboriosam quae cupiditate architecto veritatis nostrum modi sapiente?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloremque numquam similique laboriosam tenetur blanditiis ratione, voluptas excepturi illo provident sit quos autem accusamus, repellat veritatis aut qui possimus soluta.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe quae error laborum? Cupiditate repellendus inventore voluptates fuga facere, harum neque est. Magni ratione exercitationem velit natus fuga repudiandae ipsam!
                </p>
            </div>
        </div>
    </div>
  )
}
