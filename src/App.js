
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Startside from './pages/Startside';

function App() {
  return (
    <BrowserRouter>
    
     <Routes>

        <Route path='/' element={<Startside />} />
     </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;
