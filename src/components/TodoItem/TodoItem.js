/**
 * @file TodoItem
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import TodoTypes from '../../constants/TodoTypes';
import _ from 'lodash';
import classNames from 'classNames';

import './TodoItem.scss';

export default class TodoItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        type: PropTypes.number.isRequired,
        completed: PropTypes.bool,
        deleteItem: PropTypes.func.isRequired,
        completeItem: PropTypes.func.isRequired
    }

    render() {
        const completeButton = <button onClick={() => this.props.completeItem(this.props.id)} className="check-operator"></button>;
        return (
            <div className={"todo-item " + classNames({'todo-item-checkd': this.props.completed})}>
                <span className={'item-icon icon-' + _.find(TodoTypes, {id: this.props.type}).alias}></span>
                <div className="todo-item-content">
                    <p onClick={this.readDetail.bind(this)}>{this.props.content}</p>
                    <p>{this.props.time}{this.props.location}</p>
                </div>
                <div className="todo-item-operator">
                    {!this.props.completed && completeButton}
                    <button onClick={() => this.props.deleteItem(this.props.id)} className="delete-operator"></button>
                </div>
            </div>
        );
    }

    readDetail(e) {
        if (this.props.completed) {
            return;
        }
        browserHistory.push(`/thing/${this.props.id}`);
    }
}
