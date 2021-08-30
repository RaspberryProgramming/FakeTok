import React from 'react';

class VideoInfo extends React.Component {

  render() {
    return (
      <div className="video-info">
        <div className="username">
          @{ this.props.username }
        </div>
        <div className="description">
          { this.props.description }
        </div>
      </div>
    );
  }
}

export default VideoInfo;
