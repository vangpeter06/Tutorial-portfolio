import React, { Component } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import resumeData from "./Components/resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
