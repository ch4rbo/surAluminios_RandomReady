import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  let images = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  let image = images[Math.floor(Math.random() * images.length)];

  let texts = ['Aberturas Inteligentes', 'Aberturas de Alta Prestación', 'Calidad, Confort y Elegancia para tus Aberturas'];
  let text = texts[Math.floor(Math.random() * texts.length)];


  return (
    image && (
      <section className={`h-screen bg-cover font-[Poppins] md:bg-top bg-center ${image}`}>
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          {text}
          </h1>
          <div className="text-xl">
            <Button />
          </div>
        </div>
      </section>
    )
  )
};

export default App;

