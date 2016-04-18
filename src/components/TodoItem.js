/**
 * @file TodoItem
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

export default class TodoItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        completed: PropTypes.bool,
        deleteItem: PropTypes.func.isRequired,
        completeItem: PropTypes.func.isRequired
    }

    render() {
        const completeButton = <button onClick={() => this.props.completeItem(this.props.id)}>complete</button>;
        return (
            <div>
                <span>{this.props.type}</span>
                <div>
                    <p onClick={this.readDetail.bind(this)}>{this.props.content}</p>
                    <p>{this.props.time}{this.props.location}</p>
                </div>
                {!this.props.completed && completeButton}
                <button onClick={() => this.props.deleteItem(this.props.id)}>remove</button>
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
