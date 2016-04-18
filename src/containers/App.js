import React, {Component} from 'react';
import createStore from '../store/configureStore';
import {combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import stateStore from '../middlewares/StateStore';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware =
  applyMiddleware(stateStore)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {this.props.main}
            </Provider>
        );
    }
}
