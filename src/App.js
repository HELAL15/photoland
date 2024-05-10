import React, { memo, useEffect } from 'react';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import ReturnsPolicy from './pages/ReturnsPolicy';
import About from './pages/About';
import Error404 from './pages/Error404';
import AllProducts from './pages/AllProducts';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, Route , Routes, useLocation } from 'react-router-dom';

//Layout
const Layout =()=>{
  return(
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

const App = () => {
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top:0, left:0 , behavior:"instant"})
  },[pathname])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/allProducts' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='product/:id' element={<ProductDetails/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/policy' element={<Policy/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/ReturnsPolicy' element={<ReturnsPolicy/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error404/>} />
      </Route>
    </Routes>
  );
};

export default memo(App);
