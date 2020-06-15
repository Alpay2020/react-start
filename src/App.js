import React from 'react';
import Header from './components/Header';
import List from "./components/List";

const beers = ["Hansa Pils" , "Flensburger" , "Pfungstädter" , "Efes" ]

function App() {
  return (
    <div className="App">
      <Header />
      <List items={beers}/>
    </div>
  );
}

export default App;
