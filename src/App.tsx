import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/category/CategorySection";
import Carousels from "./components/Carousels/Carousels";
import ItemSection from "./components/item-section/ItemSection";
import CategoryLogo from "./components/categorylogo/CategoryLogo";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Switch>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        ))}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
