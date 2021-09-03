import React from 'react';
import Video from './Video';
import Widgets from './VideoWidgets';
import RightButtons from './VideoWidgets/RightButtons';
import VideoInfo from './VideoWidgets/VideoInfo';

class Player extends React.Component {
  // Used to display videos, controls, and informtion
  render() {
    return (
      <div className="app-content">
        <Video />
        <Widgets>
          <RightButtons />
          <VideoInfo username={localStorage.getItem('username')} description={"This is a description"} />
        </Widgets>
      </div>
    );
  }
}

export default Player;
