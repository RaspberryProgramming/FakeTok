import React from 'react';

class App extends React.Component {

  render() {
    // Temporarily return default video
    return (
      <div className="video">
        <video src={`/api/posts/video/${this.props.id}`} loop autoPlay></video>
      </div>
    );
  }
}

export default App;
