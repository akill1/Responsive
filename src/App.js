// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StateTable from './components/StateTable';
import StateViewEdit from './components/StateViewEdit';
import StateFieldAddModal from './components/StateFieldAddModal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="state" element={<StateTable />} />
          <Route path="state/view/:id" element={<StateViewEdit />} />
          <Route path="state/add-field" element={<StateFieldAddModal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
