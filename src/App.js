
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
// import Services from './Pages/Home/Services/Services';
import Login from './Pages/Home/Home/Login/Login';
// import Experts from './Pages/Home/Experts/Experts';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Home/Home/Login/Register/Register';



function App() {
  return (
    <div>

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/experts' element={<Experts></Experts>}></Route>   */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
