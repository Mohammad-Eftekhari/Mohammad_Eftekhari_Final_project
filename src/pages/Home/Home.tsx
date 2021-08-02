import React from "react";
import Carousels from "../../components/Carousels/Carousels";

import CategoryLogo from "../../components/categorylogo/CategoryLogo";

import ItemSection from "../../components/item-section/ItemSection";

const Home = () => {
  return (
    <>
      <Carousels />
      <ItemSection header={"محصولات پر بازدید"} />
      <ItemSection header={"پر فروش ترین ها"} />
      <CategoryLogo />
    </>
  );
};

export default Home;
