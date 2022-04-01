import React from 'react'
import './Slider.css'
import imgpoke from '../../media/pokemon-api-img.jpg'
import imgpetcare from '../../media/dogs.jpg'
import imgweatherapp from '../../media/lluvia.jpg'
import {Link} from 'react-router-dom'



export default function Slider () {

    return (
        <div className='containerslider'>
<div className='containertitle'>
    <h2>Mis proyectos</h2>
</div>
<div className='proyectscards'>
<div className='containercard'>
    <div className='cards'>

<Link to='/pokemonproyect'>
        <img className='imgcard'src={imgpoke} alt='pokeimg' />
        
        </Link>
    </div>
    <div className='desclider'>
            <span>Spa api Pokemon</span>
        </div>
    </div>
    <div className='containercard'>
        <div className='cards'>
            
      <Link  to='/pet-care'>
        <img className='imgcard'src={imgpetcare} alt='pokeimg' />
      </Link> 
        </div>
        <div className='desclider'>
            <span>Pet-Care Web</span>
        </div>
    </div>
  
    <div className='containercard'>
        <div className='cards'>
            <Link to='/weather-app'>
        <img className='imgcard'src={imgweatherapp} alt='pokeimg' />
            </Link>
        </div>
        <div className='desclider'>
            <span>React-Native App</span>
        </div>
    </div>
  
  


</div>



   
        </div>
  

 
    )
}