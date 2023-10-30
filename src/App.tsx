import { useState } from 'react';
import './App.css';
import VideoBanerPage from '@/components/mainPage/VideoBanerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [videoProgress, setVideoProgress] = useState<number>(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<VideoBanerPage videoProgress={videoProgress} setVideoProgress={setVideoProgress} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
