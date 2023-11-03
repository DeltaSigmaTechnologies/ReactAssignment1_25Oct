import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header';
import Table from './components/Table';
import Menu from './components/Menu';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      
        
        <Header /> 
        <Routes>
            <Route exact path="/" element={<Home />} />    
            <Route exact path="/menu" element={<Menu />}/>      
            <Route exact path="/table" element={<Table />} />  

          
      </Routes>
     
      
    </>
  );
}

export default App;
