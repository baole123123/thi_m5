import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import StaffList from './pages/StaffList';
import StaffCreate from './pages/StaffCreate';
import StaffEdit from './pages/StaffEdit';
import StaffDelete from './pages/StaffDelete';

function App() {
  return (
      <Routes>
        <Route path="/" element={<StaffList />} />
        <Route path="/create" element={<StaffCreate />} />
        <Route path="/edit/:id" element={<StaffEdit />} />
        <Route path="/delete/:id" element={<StaffDelete />} />
      </Routes>
  );
}

export default App;
