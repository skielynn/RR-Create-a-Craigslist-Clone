// Import data

// Import components
import './App.css';
import React from 'react';
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar';
import Sidebar from './Components/Sidebar'


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <div style={{width: "25vw", background: "lightgreen"}}>
       <Sidebar />
       </div> 
       <main>
       <Searhcbar />
       <Gallery />
       </main>
      </div>
    </div>
  );
}

export default App;
