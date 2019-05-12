import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import TopNavigation from './components/TopNavigation'
import BotNavigation from './components/BotNavigation';
import MainContain from './components/MainContain'

import { connect } from 'react-redux'
import { fetchSongs, fetchUser } from './actions'

class App extends Component { 
  componentDidMount(){
      this.props.fetchSongs(1);
      this.props.fetchSongs(2);
      this.props.fetchSongs(3);
      this.props.fetchSongs(4);
      this.props.fetchSongs(5);
      this.props.fetchSongs(6);
  }

  render() {
    return (
      <div>        
        {/* <TopNavigation /> */}
        <MainContain />
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

export default connect(mapStateToProps, {fetchSongs, fetchUser})(App)
