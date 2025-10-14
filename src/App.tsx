import React from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import CollectionCards from './components/CollectionCards';

export default function App() {
  return (
    <>
      <div className='sematic'>
        <Header></Header>
        <main className='d-flex flex-column align-items-center'>
          <Carousel></Carousel>
          <CollectionCards></CollectionCards>
        </main>
        <Footer></Footer>

      </div>
    </>
  )
}
