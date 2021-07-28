import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Category from './components/category/Category';
import Carousels from './components/Carousels/Carousels'
import ItemSection from './components/item-section/ItemSection';


function App() {
  return (
    <>
      <Header />
      <Category />
      <Carousels/>
      <ItemSection />
    </>
  );
}

export default App;
