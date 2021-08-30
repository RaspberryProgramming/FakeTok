import React from 'react';

class Widgets extends React.Component {

  render() {
    return (
      <div className="widgets">
        {this.props.children}
      </div>
    );
  }
}

export default Widgets;
