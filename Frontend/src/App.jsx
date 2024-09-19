import React from 'react'
import { Routes, Route }  from 'react-router-dom'
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar />
      <Routes>
         <Route path='/' element = {<Home/>} />
         <Route path='/collection' element ={<Collection/>}/>
         <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/product/:productId' element ={<Product />}/>
         <Route path='/cart' element ={<Cart />}/>
         <Route path='/place-order' element ={<PlaceOrder />}/>

        
      </Routes>
      <Footer />

    </div>
  )
}

export default App