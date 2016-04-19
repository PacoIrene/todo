/**
 * @file Item
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {Link} from 'react-router';

import './Item.scss';

import * as todoActions from '../actions/TodoActions';

import TodoForm from '../components/TodoForm/TodoForm';

class Item extends Component {
    render() {
        const {todos, dispatch} = this.props;
        const todoList = todos.get('todoList').toList().toJS();
        const actions = bindActionCreators(todoActions, dispatch);
        const id = this.props.params.id;
        let form = <TodoForm submitForm={actions.addItem}/>;
        if (id) {
            const item = _.find(todoList, {id: parseInt(id, 10)});
            form = <TodoForm
                    submitForm={actions.updateItem}
                    id={id}
                    content={item.content}
                    type={item.type}/>;
        }
        return (
            <div className="todo-form">
                <div className="todo-form-head">
                    <Link to="/"></Link>
                    <span>{'Add new thing'}</span>
                </div>
                <p className="todo-form-logo"></p>
                {form}
            </div>
        );
    }
}

export default connect(
  state => ({ todos: state.todos })
)(Item);
