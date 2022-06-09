import React from "react";
import Navigation from "./Navigation/Navigation";
import { Wrapper } from "./HomeSTyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import useLocalStorage from "../../hooks/useLocalStorage";
const Home = () => {
    useLocalStorage();
    return(
        <Wrapper>
            <Navigation />
            <Header />
            <Footer />
        </Wrapper>
    )

};

export default Home;
