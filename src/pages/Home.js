import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Menuadd from '../components/Menuadd/index'
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Menuadd/>
      <Footer/>
    </div>
  );
};

export default Home;