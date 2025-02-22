import './App.css';
import About from './components/about/About';
import Cards from './components/cards/Cards';
import HydraFooter from './components/hydraFooter/HydraFooter';
import HeroContact from './components/heroContent/HeroContact';
import HeroHeader from './components/heroHeader/HeroHeader';
import HowWeBuild from './components/howWeBuild/HowWeBuild';
import HydraForm from './components/hydraForm/HydraForm';
import Introduction from './components/introduction/Introduction';
import LogosSection from './components/logosSection/LogosSection';
import Navbar from './components/navbar/Navbar';
import ProcessSteps from './components/processSteps/ProcessSteps';
import Section from './components/section/Section';
import WhyBuild from './components/whyBuild/WhyBuild';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroHeader/>
      <HeroContact/>
      <Introduction/>
      <About/>
      <WhyBuild/>
      <Cards/>
      <Section/>
      <LogosSection/>
      <HowWeBuild/>
      <ProcessSteps/>
      <HydraForm/>
      <HydraFooter/>
    </div>
  );
}

export default App;
