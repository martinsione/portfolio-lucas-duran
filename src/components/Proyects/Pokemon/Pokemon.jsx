import React from 'react'
import pokemon1 from '../../../media/pokemon1.jpg'
import pokemon2 from '../../../media/pokemon2.jpg'
import pokemon3 from '../../../media/pokemon3.jpg'
import './Pokemon.css'
export default function Pokemon() {
    return (
        <div className='container'>
            <h1 className='title'>
                Pokemon spa-api
            </h1>
            <div className='description'>
                <h4>
                    Single page app, Desarrollarada con un front-end y un back-end
                </h4>
               
            </div>
            <div className='description'>

<h4  >
   <a href='https://pokemon-spa-api.vercel.app/'  target="_blank">Link Para ir al proyecto </a> 
</h4>
 </div>
            <div className='desccontainer'>
                <div>
                <img className='imgpoke' src={pokemon1} alt='pokemonspa' width='800' height='400'/>
                </div>

           <div className='textdesc'>

         
                <p>
                    Desarrollada con React y Redux en el front, diseño logrado con CSS puro y en el back-end use sequalize, postgres, express para el manejo de servidores 
                    que tomaban la informacion llegada de una API (Pokemon)
               
                    La pagina cuenta con filtrados de orden alfabetico, filtros por pokemones mas fuertes y debiles , por tipo de pokemon
                  y tambien por pokemones creados en la Base de Datos o traidos por la API,  tambien cuenta con una searchBar para buscar pokemon por nombre
                  tiene un boton de recargar todos los pokemones y de crear uno, Cuenta con un paginado que permite movernos por pagina, cada pagina contiene 12 pokemones 
                </p>
                </div>
            </div>
            
            <div className='desccontainer'>

                <div>
                <img  className='imgpoke' src={pokemon3} alt='detailpo'  width='800' height='400'/>
                </div>
              <div className='textdesc'> 
                <p>
                    Si presionamos una de las cards de los pokemons nos llevara al detalle de cada uno donde muestra que atributos tiene cada uno 
                </p>
                </div>
            </div>
            <div className='desccontainer'>
<div>

            <img  className='imgpoke' src={pokemon2} alt='form'  width='500'
            height='550'
            />
</div>
<div  className='textdesc' >

                <p>
                   La pagina contiene un formulario de creacion de pokemones Validado y con un boton que solo se habilita si los inputs cumplen los requisitos pedidos, tambien muestra un mensaje de error o de lo que el input esta incumpliendo, finalmente cuando se crea el pokemon se almacena en la base de datos
                </p>
</div>
            </div>
        </div>
    
    )
}