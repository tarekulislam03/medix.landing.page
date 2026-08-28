import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DealersPage } from './pages/DealersPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dealers" element={<DealersPage />} />
    </Routes>
  );
}

export default App;
