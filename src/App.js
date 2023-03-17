import Navbar from './components/navbar/Navbar';
import './App.css';
// import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Series from './components/Series/Series';
import Movies from './components/Movies/Movies';
import Error from './components/Error/Error';
function App() {

  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/series' element={<Series />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
