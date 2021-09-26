import React, { Suspense } from 'react';
import './App.css';
// Pages
import NavBar from './views/NavBar/NavBar';
import MainPage from './views/MainPage/MainPage';

function App() {
  return (
    <Suspense fallback={(<div>로딩 중...</div>)}>
      <NavBar />
      <div className="App">
        <MainPage />
      </div>
    </Suspense>
  );
}

export default App;
