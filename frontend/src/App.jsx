import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Signup from './pages/Signup';
import About from './pages/About';
import Courses from './pages/Courses';
import Header from './components/Header';
import Contact from './pages/Contact';
import { MyProfile } from './pages/MyProfile';
import Computer from './pages/Computer';
import Highschool from './pages/Highschool';

import Footer from './components/Footer';
import Login from './pages/Login';

const App = () => {
  return (
  <div >
     <div className='mx-4 sm:mx-[10%]'>
     <BrowserRouter>
   <Header/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/sign-up' element={<Signup/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/courses' element={<Courses/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/profile' element={<MyProfile/>}></Route>
       <Route path='/computer' element={<Computer/>}></Route>
       <Route path='/highschool' element={<Highschool/>}></Route>
     </Routes>
    

   </BrowserRouter>
  
     </div>
     <Footer/>
  </div>
  )
}

export default App