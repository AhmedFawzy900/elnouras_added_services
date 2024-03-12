import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import CourseDetails from './Pages/CourseDetails';
import OurServices from './Pages/OurServices';
import ScrollToTopButton from './Components/ScrollToTopButton';
import ServiceDetail from './Pages/ServiceDetail';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/courseDetails/:id' element={<CourseDetails/>}/>
      <Route path='/ourServices' element={<OurServices/>}/>
      <Route path='/serviceDetail' element={<ServiceDetail/>}/>
    </Routes>
    </BrowserRouter>
    <ScrollToTopButton />
    </div>
  );
}

export default App;
