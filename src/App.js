import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import TopNavigation from './components/TopNavigation'
import BotNavigation from './components/BotNavigation';

export default class App extends Component { 

  render() {
    return (
      <div>        
        <TopNavigation />
        <BotNavigation />
      </div>
    );
  }
}
