import React from 'react';
import Header from './components/Header';
import List from "./components/List";
import Footer from "./components/Footer";

const beers = ["Hansa Pils" , "Flensburger" , "Pfungstädter" , "Efes" ]

function App() {
  return (
    <div className="App">
      <Header title={"Alpay's favorite beers:"}/>
      <List items={beers}/>
      <hr/>
      <Footer greeting={"These beers are presented by React"}/>
    </div>
  );
}

export default App;
