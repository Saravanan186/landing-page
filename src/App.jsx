import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Abouts from "./Pages/Abouts";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Service from "./Pages/Service";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/service" element={<Service />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Counter" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
