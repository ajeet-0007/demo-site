import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import ClientView from './components/ClientViews/ClientView';
import Trust from './components/Trust/Trust';
import Header from './components/Header/Header';
import Global from './components/Global/Global';
import TechStack from './components/TechStack/TechStack';
import Steps from './components/Steps/Steps';

import WhyKodeHash from './components/WhyKodeHash/WhyKodeHash';

function App() {
  return (
    <div className="App">
      <Header/>
      <Trust/>
      <Steps/>
      <Global/>
      <TechStack/>
      <WhyKodeHash/>
      <ClientView/>
      <Footer/>
    </div>
  );
}

export default App;
