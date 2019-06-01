import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import TopNavigation from './components/TopNavigation'
import BotNavigation from './components/BotNavigation';
import MainContain from './components/MainContain'

import { connect } from 'react-redux'
import { fetchSong, fetchSongs, fetchUser } from './actions'

class App extends Component { 
  componentDidMount(){
      // this.props.fetchSong('5cedfb7aa039b7000426b39d');
      // this.props.fetchSong('5cedfbbaa039b7000426b3b5');
      // this.props.fetchSong('5ceea666c11bb15c54fafba4');
      // this.props.fetchSong('5ceec7bb2047a901d0f4a23b');
      this.props.fetchSongs();
      // this.props.fetchUser(2);
  }

  render() {
    return (
      <div>        
        <TopNavigation />
        <MainContain/>
        <BotNavigation />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      songs: state.songs
  };
}

export default connect(mapStateToProps, {fetchSong, fetchSongs, fetchUser})(App)
