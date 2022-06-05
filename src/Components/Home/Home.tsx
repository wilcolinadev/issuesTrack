import React from "react";
import Navigation from "./Navigation/Navigation";
import {Wrapper} from "./HomeSTyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Home = () => (
    <Wrapper>
        <Navigation/>
        <Header/>
        <Footer/>
    </Wrapper>
);

export default Home;