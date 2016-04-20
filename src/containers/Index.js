/**
 * @file Index
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {Link} from 'react-router';

import * as todoActions from '../actions/TodoActions';
import TodoTypes from '../constants/TodoTypes';

import Summary from '../components/Summary/Summary';
import TodoList from '../components/TodoList/TodoList';

import './Index.scss';

class Index extends Component {
    render() {
        const {todos, dispatch} = this.props;
        const todoList = todos.get('todoList').toList().toJS();
        const actions = bindActionCreators(todoActions, dispatch);
        const summary = getSummary(todoList);
        const todoItems = _.filter(todoList, {completed: false});
        const doneItems = _.filter(todoList, {completed: true});
        const todoContent = todoItems.length > 0 ? <TodoList todos={todoItems} actions={actions}/> : <p className="empty-tip">No Items</p>;
        return (
            <div className="todo-index-page">
                <Summary {...summary}/>
                <section className="todo-index-main">
                    <h2 className="todo-list-title">THINGS</h2>
                    {todoContent}
                    <div className="completed-area">
                        <h2 className="todo-list-title completed">COMPLETED</h2>
                        <span className="completed-item-link">{doneItems.length}</span>
                        <TodoList todos={doneItems} actions={actions}/>
                    </div>
                </section>
                <Link to='/create' className="add-tem-link"></Link>
            </div>
        );
    }
}

function getSummary(todoList) {
    const summaryList = [];
    let completedRate = 100;
    _.each(TodoTypes, type => {
        summaryList.push({
            id: type.id,
            type: _.find(TodoTypes, {id: type.id}).text,
            number: _.filter(todoList, {type: type.id, completed: false}).length
        });
    });

    completedRate = todoList.length
                    ? (_.filter(todoList, {completed: true}).length / todoList.length).toFixed(4) * 100
                    : 100;
    return {
        summaryList,
        completedRate
    };
}

export default connect(
  state => ({todos: state.todos})
)(Index);
