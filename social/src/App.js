import './App.css';
import Pages from './Components/Pages/Pages'; 
import { BrowserRouter } from 'react-router-dom';
import AppContext from './Components/AppContext/AppContext';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppContext>
          <Pages />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
