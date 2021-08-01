import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/category/Category";
import Carousels from "./components/Carousels/Carousels";
import ItemSection from "./components/item-section/ItemSection";
import CategoryLogo from "./components/categorylogo/CategoryLogo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Carousels />
      <ItemSection header={"محصولات پر بازدید"} />
      <ItemSection header={"پر فروش ترین ها"} />
      <CategoryLogo />
      <Footer />
    </>
  );
}

export default App;
