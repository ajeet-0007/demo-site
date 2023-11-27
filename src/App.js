import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import ClientView from './components/ClientViews/ClientView';

function App() {
  return (
    <div className="App">
      <ClientView/>
      <Footer/>
    </div>
  );
}

export default App;
