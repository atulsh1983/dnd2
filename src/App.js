import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DragUI from "./component/FlowTwo/DragUI";
import PreviewOne from './component/FlowTwo/PreviewOne';




class App extends React.Component {
 
  render() {
    
    return (
      <div>
        
          <Router>
          <Switch>
              <Route path="/" exact component={DragUI}/>
              <Route path="/Preview" component={PreviewOne}/>
            </Switch>
          </Router>
        
      </div>
     
    )
  }
}

export default App;
