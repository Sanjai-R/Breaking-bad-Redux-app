import './App.css';
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Characters from './components/Characters'

function App() {
  
  return (
    <div className="Containers">
      <Header/>
      <Searchbar/>
       <Characters/>
    </div>
  );
}

export default App;
