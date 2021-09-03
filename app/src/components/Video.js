import React from 'react';

class App extends React.Component {

  render() {
    // Temporarily return default video
    return (
      <div className="video">
        <video src="/default.webm" loop autoPlay></video>
      </div>
    );
  }
}

export default App;
