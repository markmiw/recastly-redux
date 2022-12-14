import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = (state) => ({
  video: state.currentVideo,
});

var mapDispatchToProps = (dispatch) => ({
  handleInputChange: (q) => {
    dispatch(handleVideoSearch(q));
  },
});
var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
