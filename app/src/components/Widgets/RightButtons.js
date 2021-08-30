import React from 'react';

class RightButtons extends React.Component {

  renderButtons() {
    return (
      <div class="right-buttons">
        <i class="bi bi-circle" />
        <i className="bi bi-heart-fill" />
        <i class="bi bi-chat-dots" />
        <i class="bi bi-share" />
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
