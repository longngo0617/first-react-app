
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/index';
function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <Home/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
