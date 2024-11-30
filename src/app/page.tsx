import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Achivement from "./components/achivements";
import Courses from "./components/courses";
import Section from "./components/section";
import Team from "./components/team";
import Header2 from "./components/header2";
import Testimonals from "./components/testimonals";
import MobileHeader from "./components/mobileheader";
import Team2 from "./components/team2";


function Home () {
     return (
      <div>
      <Header /> 
      <Header2 />
      <MobileHeader />
      <Hero  />
      <Logo />
      <Section />
      <Achivement />
      <Courses />
      <Team2 />
      <Team />
      <Testimonals />
      <Footer />
      </div>
       
  )
}

export default Home;
   