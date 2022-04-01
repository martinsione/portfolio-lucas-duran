import React,{ useState,useEffect } from 'react'
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './components/Home/Home';
import Pokemon from './components/Proyects/Pokemon/Pokemon';
import PetCare from './components/Proyects/Pet-care/Petcare'
import WeatherApp from './components/Proyects/Weatherapp/Weatherapp'
import './App.css'
function App() {
  const [scroll, setScroll] = useState(0)
function handleScroll () {
  const position = window.pageXOffset;
  setScroll(position);
}
useEffect(()=> {
  window.addEventListener('scroll',handleScroll);

},[scroll])
  return (
    
   
     <BrowserRouter>
   
   <Routes>
   <Route path={'/'} element={<Home/>}/>
     <Route path={'/pokemonproyect'} element={<Pokemon/>}/>
     <Route path={'/pet-care'} element={<PetCare/>}/>
     <Route path={'/weather-app'} element={<WeatherApp/>}/>
   </Routes>
   </BrowserRouter>
     

     
    
)
}




export default App




// return (
//   <div className="App">
//     <Navbar isScrolling={scroll}/>
//    <Cover/>
//    <About/>
//   <Slider/>
//   <Info/>
//    <Footer/>

//    <BrowserRouter>
 
//  <Routes>
//    <Route path={'/pokemonproyect'} element={<Pokemon/>}/>
   
//  </Routes>
//  </BrowserRouter>
   

   
//   </div>
// )
