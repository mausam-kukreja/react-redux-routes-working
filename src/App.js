import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SettingPage from './pages/SettingPage';
import TicTacTeoPage from './pages/TicTacTeoPage';
import ToDoPage from './pages/ToDoPage'
import LobbyPage from './pages/LobbyPage'
import store from './store';
import MyApp from './MyApp';
class App extends Component {
  render() {
    return ( 
  <Provider store={store}>
    <Router>
      <MyApp>
          <Switch>
            <Route path="/" exact component={LobbyPage} />
            <Route path="/settings" exact component={SettingPage} />
            <Route path="/TicTacTeo" exact component={TicTacTeoPage} />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
      </MyApp>
    </Router>
  </Provider>
   );
  }
}
export default App;