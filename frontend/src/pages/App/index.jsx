import { Container } from './styles';
// import logo from '../../assets/logo.jpeg'
import logo from '../../assets/market3.png'


import { ProductForm } from '../../components/ProductForm';
import { ProductList } from '../../components/ProductList';

import {Routes, Route } from 'react-router-dom';


export function App() {

  return (
    <Container>
      <img src={logo} alt="logo site" />

      <div className="box-main">
      <Routes>
        <Route path='/' element={<ProductForm />} />
        <Route path='/list' element={<ProductList />} />
      </Routes>
      </div>

    </Container>
  )

}