import './components/first/first'
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/second/third';
import Fourth  from './components/second/four';
import { BrowserRouter, Routes, Route, Link   } from 'react-router-dom';  
import Menu  from './components/second/menu';
function App() {
  return (
    <div className="App">
    {/* <First/>
    <Second/>
    <Third FirstName="Abhi" LastName="Nagare"/>
    <Fourth/> */}

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/first" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/third" element={<Third FirstName="Ajay" LastName="Kandagatla"/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
