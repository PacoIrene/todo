/**
 * @file TodoForm
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import TodoTypes from '../constants/TodoTypes';
import {browserHistory} from 'react-router';

export default class TodoForm extends Component {
    static propTypes = {
        submitForm: PropTypes.func.isRequired
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            content: props.content || '',
            type: props.type || 1
        };
    }

    render() {
        const buttonText = this.props.id ? 'Update' : 'Add to your things';
        return (
            <section>
                <select
                    onChange={this.handleTypeChange.bind(this)}
                    value={this.state.type}>
                    {
                        _.map(TodoTypes, type => {
                            return (
                                <option value={type.id} key={type.id}>
                                    {type.text}
                                </option>
                            );
                        })
                    }
                </select>
                <input
                    type="text"
                    autoFocus="true"
                    placeholder="Thing's content"
                    value={this.state.content}
                    onChange={this.handleContentChange.bind(this)} />
                <button onClick={this.handleSubmit.bind(this)}>{buttonText}</button>
            </section>
        );
    }

    handleContentChange(e) {
        this.setState({
            ...this.state,
            content: e.target.value
        });
    }

    handleTypeChange(e) {
        this.setState({
            ...this.state,
            type: e.target.value
        });
    }

    handleSubmit(e) {
        const id = this.props.id;
        const type = parseInt(this.state.type, 10);
        const content = this.state.content.trim();
        if (content) {
            this.setState({
                type: 1,
                content: ''
            });
            this.props.submitForm({id, type, content});
            browserHistory.push('/');
        }
    }
}
