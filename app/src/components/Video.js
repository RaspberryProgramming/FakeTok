import React from 'react';

class App extends React.Component {

  render() {
    // Temporarily return default video
    return (
      <div className="video">
        <video src={this.props.link} loop autoPlay></video>
      </div>
    );
  }
}

export default App;
