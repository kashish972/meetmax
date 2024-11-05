import React from 'react';
import Sidebar from "./components/Sidebar";
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';
import Header from './components/Header';
import Footer from './components/Footer';
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
