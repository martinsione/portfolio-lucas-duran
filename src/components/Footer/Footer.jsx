import React from 'react'
import './Footer.css'
export default function Footer () {
    return (

        <footer className='footer'>
            <div className='footer-info'>
                <h1>Lucas Duran</h1>
                <p>Full Stack || Front-End Dev</p>
            </div>
<div className='footer-contact'>
    <h3>Puedes contactarme</h3>
  
</div>
<div className='footer-sms'>
<div className='design-by'>
<p>Para saber mas sobre mi</p>
</div>
<div className='sms-links'>
<a href='https://www.linkedin.com/in/lucasduran33/' target="_blank">
<i className='fab fa-linkedin linkedin'></i>
</a>
<a href='https://github.com/lucasduran33' target="_blank">
<i className='fab fa-github github'></i>
</a>

</div>
</div>
        </footer>
    )
}
