import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import routes from './routes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={<route.element />} key={index} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
