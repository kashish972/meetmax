import React from 'react';
import Sidebar from "./Components/Sidebar";
import MainFeed from './Components/MainFeed';
import RightSidebar from './Components/RightSidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <MainFeed />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
