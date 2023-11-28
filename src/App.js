import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import ClientView from './components/ClientViews/ClientView';
import WhyKodeHash from './components/WhyKodeHash/WhyKodeHash';

function App() {
  return (
    <div className="App">
      <WhyKodeHash/>
      <ClientView/>
      <Footer/>
    </div>
  );
}

export default App;
