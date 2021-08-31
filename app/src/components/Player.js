import React from 'react';
import Video from './Video';
import Widgets from './Widgets';
import RightButtons from './Widgets/RightButtons';
import VideoInfo from './Widgets/VideoInfo';

class Player extends React.Component {
  render() {
    return (
      <div className="app-content">
        <Video />
        <Widgets>
          <RightButtons />
          <VideoInfo username={"UserName"} description={"This is a description"} />
        </Widgets>
      </div>
    );
  }
}

export default Player;
