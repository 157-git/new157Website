import './styles/App.css';
import Header from './components/Header/Header';
import BuildFor from './sections/BuildFor';
import WhyWeAre from './sections/WhyWeAre';
import Footer from './components/Footer/Footer';
import Features from './sections/Features';
import Home from './sections/Home';
import DemoForm from './components/DemoForm';
import About from './sections/About';
import Workflow from './sections/Workflow';
import Image from './sections/Image';
import Faq from './sections/Faq';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    // Scroll to top on page load
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section id="home"><Home /></section>
      <section id="features"><Features /></section>
      <section id="WhoWeServe"><BuildFor /></section>
      <section id="WhyUs"><WhyWeAre /></section>
      <section id="workflow"><Workflow /></section>
      <section id="image"><Image /></section>
      <section id="requestdemo"><DemoForm /></section>
      <section id="faq"><Faq /></section>
      <section id="aboutus"><About /></section>
      <section><Footer /></section>






    </>
  );
};

export default App;
