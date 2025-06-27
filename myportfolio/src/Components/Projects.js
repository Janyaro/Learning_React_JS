import React from 'react'
import imageUrl from '../assets/user.png';
export default function Projects() {
    const projects = [
        {   
            img: {imageUrl},
            name:'Ecommerce app',
            description:'this is ecommerce app ',
            tags:'flutter',
            link:''
        },
        {   
            img: {imageUrl},
            name:'Ecommerce app',
            description:'this is ecommerce app ',
            tags:'flutter',
            link:''
        },
        {   
            img: {imageUrl},
            name:'Ecommerce app',
            description:'this is ecommerce app ',
            tags:'flutter',
            link:''
        },
    ]
  return (
    <div>
        <div className='skill-card skill-container '>
      {projects.map((project , index)=>{
        return <div className="container ">
                    <div className="row skill-container">
                        {/* Card 1 */}
                        <div className="col-md-4 mb-4 skill-container">
                            <div class="card" >
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
                        </div>
  </div>
</div>
      })}
      </div>
    </div>
  )
}
