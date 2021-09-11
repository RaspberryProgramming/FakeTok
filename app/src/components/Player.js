import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { fetchPosts, fetchPost, postUp, postDown } from '../actions';
import Video from './Video';
import Widgets from './VideoWidgets';
import RightButtons from './VideoWidgets/RightButtons';
import VideoInfo from './VideoWidgets/VideoInfo';


const Player = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if(!mounted) {
      props.fetchPosts();

      window.onkeydown = (e) => {
        
        if(e.key === "ArrowUp") {
          props.postUp();
        } else if (e.key === "ArrowDown") {
          props.postDown();
        }
        
      }
      console.log(mounted);
      
      setMounted(true);

      // Cleanup
      return () => {
        window.onkeydown = undefined;
      }
    }
  });

  

  if (!props.post && props.posts) {
    props.fetchPost(props.videoId);
  }

  const handlers = useSwipeable({
    onSwipedUp: () => props.postDown(),
    onSwipedDown: () => props.postUp(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  let link = props.videoId ? `/api/posts/video/${props.videoId}` : 'default.webm';

  // Used to display videos, controls, and information
  
  return (
    <div className="app-content" {...handlers} >
      <Video link={link} />
      <Widgets>
        <RightButtons />
        <VideoInfo username={props.post? props.post.uploader: ''} description={props.post ? props.post.description: ''} />
      </Widgets>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    post: state.posts.post,
    videoId: state.posts.videoId,
  };
};


export default connect(mapStateToProps, { fetchPosts, fetchPost, postUp, postDown })(Player);
