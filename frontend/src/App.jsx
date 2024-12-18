import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Courses from './pages/Courses';
import Header from './components/Header';
import Contact from './pages/Contact';
import { MyProfile } from './pages/MyProfile';
import Computer from './pages/Computer';
import Highschool from './pages/Highschool';

const App = () => {
  return (
  <div className="mx-4 sm:mx-[10%]">
     <BrowserRouter>
   <Header/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/sign-in' element={<Signin/>}></Route>
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
  )
}

export default App