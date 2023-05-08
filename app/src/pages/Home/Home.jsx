import React from "react";
import Filter from "../../components/Filter/Filter";
import Houses from "../../components/Houses/Houses";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (<>
      <Navbar/>
      <Filter/>
      <Houses/>
      <Footer/>
    </>
    )
}

export default Home;