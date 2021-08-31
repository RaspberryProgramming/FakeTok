import React from 'react';

class RightButtons extends React.Component {

  renderButtons() {
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
