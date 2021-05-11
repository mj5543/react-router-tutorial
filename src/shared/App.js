import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts } from '../pages';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Menu from '../components/Menu/Menu';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="content-container">
                <Route exact path="/" component={Home}/>
                <Switch>
                  <Route path="/about/:name" component={About}/>
                  <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>

                </div>
            </div>
        );
    }
}

export default App;