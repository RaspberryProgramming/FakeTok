import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../actions';
import Video from './Video';
import Widgets from './VideoWidgets';
import RightButtons from './VideoWidgets/RightButtons';
import VideoInfo from './VideoWidgets/VideoInfo';

class Player extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    
    if (!this.props.post && this.props.posts) {
      this.props.fetchPost(this.props.videoId);
    }
  }

  // Used to display videos, controls, and information
  render() {
    return (
      <div className="app-content">
        <Video id={this.props.videoId} />
        <Widgets>
          <RightButtons />
          <VideoInfo username={localStorage.getItem('username')} description={"This is a description"} />
        </Widgets>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    post: state.posts.post,
    videoId: state.posts.videoId,
  };
};


export default connect(mapStateToProps, { fetchPosts, fetchPost })(Player);
