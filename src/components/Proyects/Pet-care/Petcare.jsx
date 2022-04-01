import React from 'react'
import petcare from '../../../media/petcare1.jpg'
import petcareprofile from '../../../media/petcareprofile.jpg'
import petcareform from '../../../media/petcareform.jpg'
import './Petcare.css'
export default function Pokemon() {
    return (
        <div className='container'>
            <h1 className='title'>
               Pet-care Plataform
            </h1>
            <div className='description'>
                <h4>
                   Pagina de servicio para cuidadores de mascotas y gente que necesita uno
                </h4>
               
            </div>
            <div className='description'>

<h4  >
   <a href='https://demopetcare.vercel.app/'  target="_blank">Link Para ir al proyecto </a> 
</h4>
 </div>
            <div className='desccontainer'>
                <div>
                <img className='imgpoke' src={petcare} alt='pokemonspa' width='800' height='400'/>
                </div>

           <div className='textdesc'>

         
                <p>
                Proyecto final del BootCamp soyHenry es una plataforma de servicio para cuidadores y gente que solicite el servicio de cuidadores, La web cuenta 
                con Inicio de sesion, registrarse,cambiar contraseñas posee un home donde tiene los filtros, la barra de busqueda y los anuncios de cuidadores
                esta web fue desarrollada con React-Redux, Sequalize, Express, Postgres, Mysql y los estilos fueron de react-prime y CSS puro
                </p>
                </div>
            </div>
            
            <div className='desccontainer'>

                <div>
                <img  className='imgpoke' src={petcareprofile} alt='detailpo'  width='800' height='400'/>
                </div>
              <div className='textdesc'> 
                <p>
                  Cuenta con un perfil donde podemos editar nuestro perfil, agregar foto de perfil, ver nuestras publicaciones, comentarios que recibimos contrataciones en el caso de ser un cuidador, Tambien cuenta con forma de pago Bancaria y mercado libre. Posee un mapa para ver las personas que necesitan cuidador cerca de mi ubicacion y la posibilidad de editar o eliminar una publicacion propia
                </p>
                </div>
            </div>
            <div className='desccontainer'>
<div>

            <img  className='imgpoke' src={petcareform} alt='form'  width='500'
            height='550'
            />
</div>
<div  className='textdesc' >

                <p>
                 La pagina contiene formularios validados para crear publicaciones, cambiar contraseñas, editar perfil, editar publicaciones
                </p>
</div>
            </div>
        </div>
    
    )
}