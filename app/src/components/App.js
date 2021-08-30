import React from 'react';
import Video from './Video';
import Widgets from './Widgets';
import RightButtons from './Widgets/RightButtons';
import VideoInfo from './Widgets/VideoInfo';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark text-light app">
        <Video />
        <Widgets>
          <RightButtons />
          <VideoInfo username={"UserName"} description={"This is a description"} />
        </Widgets>
      </div>
    );
  }
}

export default App;
