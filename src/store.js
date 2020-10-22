import createStore from 'redux';
import { connect } from 'react-redux';
import { reducer } from '../reducers';
import { App } from '../index'

const store = createStore(reducer);
const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

export default {
  store, 
  ConnectedApp
}