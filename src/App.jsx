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

const App = () => {
    return (
        <>
            <Header />
            <section>
                <Home />
            </section>
            <section>
                <Features />
            </section>
            <section>
                <BuildFor />
            </section>
            <section>
                <WhyWeAre />
            </section>
            <section>
                <Workflow />
            </section>
            <section>
                <Image />
            </section>
            <section>
                <DemoForm />
            </section>
            <section>
                <Faq />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Footer />
            </section>









        </>
    );
};

export default App;
