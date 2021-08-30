import React from 'react';

class Widgets extends React.Component {

  render() {
    console.log(this.props);

    return (
      <div className="widgets">
        {this.props.children}
      </div>
    );
  }
}

export default Widgets;
