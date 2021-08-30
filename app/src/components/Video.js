import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="video">
        <video src="/default.webm" autoplay="true"></video>
      </div>
    );
  }
}

export default App;
