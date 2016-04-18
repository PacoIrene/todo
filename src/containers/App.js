import React, {Component} from 'react';
import createStore from '../store/configureStore';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';

import * as reducers from '../reducers';

import TodoList from './TodoList';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
    }
}
