import React from 'react';
import { Provider } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Playground from './components/Playground';
import { store } from './Store';
import { FetchPlayers } from './actions/PlayerActions';


class App extends React.Component {
 
  componentDidMount() {
    FetchPlayers();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar />
          <Playground />
        </div>
      </Provider>
    );
  }
}

export default App;
