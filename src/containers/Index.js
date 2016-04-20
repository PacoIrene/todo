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
        return (
            <div className="todo-index-page">
                <Summary {...summary} className="summary"/>
                <h2>Things</h2>
                <TodoList todos = {_.filter(todoList, {completed: false})} actions = {actions} />
                <h2>Completed</h2>
                <TodoList todos = {_.filter(todoList, {completed: true})} actions = {actions} />
                <Link to='/create'>Add</Link>
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
