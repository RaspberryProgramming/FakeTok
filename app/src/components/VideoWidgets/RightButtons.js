import React from 'react';

class RightButtons extends React.Component {

  renderButtons() {
    // each icon will be used to like, share, comment and open the poster's profile
    return (
      <div className="right-buttons">
        <i className="bi bi-circle" />
        <i className="bi bi-heart-fill" />
        <i className="bi bi-chat-dots" />
        <i className="bi bi-share" />
      </div>
    );
  }

  render() {
    return (
      <div className="buttons-group">
        {this.renderButtons()}
      </div>
    );
  }
}

export default RightButtons;
