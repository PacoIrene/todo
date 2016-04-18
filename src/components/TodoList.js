/**
 * @file TodoItem
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';
import _ from 'lodash';
import TodoTypes from '../constants/TodoTypes';

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        return (
            <ul>
                {
                    _.map(this.props.todos, todo => {
                        const type = _.find(TodoTypes, {id: todo.type}).text;
                        return (
                            <TodoItem
                                key = {todo.id}
                                id = {todo.id}
                                content = {todo.content}
                                type = {type}
                                time = {todo.time}
                                location = {todo.location}
                                completed = {todo.completed}
                                {...this.props.actions}/>
                        );
                    })
                }
            </ul>
        );
    }
}
