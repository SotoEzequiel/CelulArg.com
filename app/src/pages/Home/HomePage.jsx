import React from "react";
import Filter from "../../components/Filter/Filter";
import Phones from "../../components/Phones/Phones";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
    return (<>
      <Navbar/>
      <Filter/>
      <Phones/>
      <Footer/>
    </>
    )
}

export default HomePage;