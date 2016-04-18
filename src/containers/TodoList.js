import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todoActions from '../actions/TodoActions';

class TodoList extends Component {
  render() {
    const {todos, dispatch} = this.props;
    const todoList = todos.get('todoList');
    const actions = bindActionCreators(todoActions, dispatch);
    return (
        <div>
        {
            todoList.valueSeq().map(val => val.get('content'))
        }
        </div>
    );
  }
}

export default connect(
  state => ({ todos: state.todos })
)(TodoList)
