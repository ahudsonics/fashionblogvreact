import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';
import Sidebar from './Sidebar'; // Import the Sidebar component

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="col-9">
        <Article />
      </div>
      <Sidebar /> {/* Use the Sidebar component */}
      <div>
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
