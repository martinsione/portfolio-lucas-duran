import React from "react";
import './About.css'
import perfil from '../../../media/perfil.jpg'
export default function () {
return (
    <div className="about-container">
      <div>
        <div className="about-desc">
            <h3>Sobre mi</h3>
            <p>Hola!, soy de Argentina. Comence a estudiar programacion en el BootCamp de SoyHenry el cual me encuentro ya graduado. Actualmente me encuentro en busqueda activa de trabajo. Soy Full Stack Dev con horientacion al desarrollo Front-End, me gusta aprender autodidacta, los desafios que amplian el horizonte de conocimientos y  estar en constante contacto con el codigo ya que me apasiona estas herramientas digitales!, algunas tecnologias que se aplicar y usar son:
            </p>
        </div>
        <div className="desc-tec">
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065141-70c30e3c-30e7-4adf-91d1-d0b0256a24ee.png' width='100' />
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065351-e8cf5a47-8ef5-4272-b6c4-bf18e0c1a53d.png' width='100' />
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065360-66f03302-95a5-4b28-91cb-932e15e51a51.png'  />
      
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065303-5b254d56-352d-48ba-b908-7f509f60e221.png' />
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065246-c172011a-63b6-47e7-9ae4-62d9ad40511e.png'  />

        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065377-bee1aeda-3485-40b4-949e-389c43c95dc2.png'  />
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065415-ca0b77b2-d703-4079-9e2c-ef9bc4be6724.png'  />
        <img className="icon-img" src='https://user-images.githubusercontent.com/90634488/154065389-3217504f-bae8-45ab-9576-be0801f1930e.png'  />
        <img className="icon-img" src='https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667'  />
        <img className="icon-img" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'  />
        <img className="icon-img" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'  />
        <img className="icon-img" src=' https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667'  />
       
        </div>
        </div>
            <div className="about-img">

      <img src={perfil} />
            </div>

    </div>
)
}