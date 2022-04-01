import Cover from '../Cover/Cover'
import Navbar from '../Cover/Navbar/Navbar'
import About from '../Cover/About/About'
import Slider from '../Slider/Slider'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
import './Home.css'
export default function Home () {
    return (
          <div className="HomeApp">
            <Navbar isScrolling={scroll}/>
           <Cover/>
           <About/>
           <Slider/>
          <Info/>
           <Footer/>
           </div>
           )
}