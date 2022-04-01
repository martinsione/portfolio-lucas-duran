import react from 'react'
import './Cover.css'
import coverimg from '../../media/cover.jpg'
import curriculum from '../../media/cvcv.pdf'
export default function Cover () {




    return (
        <div className='cover-container'>
      <img className='image' src={coverimg}/>
      <h1>Lucas Duran</h1>
      <p>Full Stack Developer | Front-End</p>
      <a 
      href={curriculum}
      download='Lucas-Duran-Cv'
      className='Pcurriculum'>Descargar Cv</a>
        </div>
    )
}