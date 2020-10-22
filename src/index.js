import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, ConnectedApp } from '../store';
import { fetchDog } from '../action_creators';

export class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => fetchDog(this.props.dispatch)}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url}/></p>}
      </div>
    )
  }
}

// Container component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
