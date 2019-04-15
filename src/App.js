import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import TopNavigation from './TopNavigation'
import BotNavigation from './BotNavigation';

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
