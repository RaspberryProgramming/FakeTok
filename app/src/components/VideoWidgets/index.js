import React from 'react';

class Widgets extends React.Component {

  render() {
    // div used to display widgets
    return (
      <div className="widgets">
        {this.props.children}
      </div>
    );
  }
}

export default Widgets;
