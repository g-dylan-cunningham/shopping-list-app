import React from 'react';
import AddItem from './components/AddItem';
import Items from './components/Items';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <AddItem />
        <Items />
        <Footer />
    </div>
  );
}

export default App;
