// import './App.css';
// import Search from './components/Search';

// function App() {
//   return (
//     <div>

//      <h1 className='heading'>Welcome to skyllx Job Portal</h1>
  
//       <Search/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobDashboard from './components/JobDashboard';
import './App.css'; // Importing custom CSS for styling
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
