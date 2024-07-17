import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import VideoForm from './components/VideoForm';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <VideoSection videos={videos} />
          </Route>
          <Route path="/add">
            <VideoForm addVideo={addVideo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
