/**
 * @file TodoForm
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {browserHistory} from 'react-router';

import TodoTypes from '../../constants/TodoTypes';
import Select from '../Select/Select';

import './TodoForm.scss';

export default class TodoForm extends Component {
    static propTypes = {
        submitForm: PropTypes.func.isRequired
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            content: props.content || ''
        };
    }

    render() {
        const buttonText = this.props.id ? 'Update' : 'Add to your things';
        return (
            <section className="form-container">
                <Select
                    value={this.props.type}
                    className="control"
                    ref="type"
                    options={
                        _.map(TodoTypes, type => {
                            return {
                                value: type.id,
                                text: type.text
                            };
                        })
                    }>
                </Select>
                <input
                    className="input control"
                    type="text"
                    autoFocus="true"
                    placeholder="Content"
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

    handleSubmit(e) {
        const id = this.props.id;
        const type = parseInt(this.refs.type.state.value, 10);
        const content = this.state.content.trim();
        if (content && type) {
            this.setState({
                content: ''
            });
            this.props.submitForm({id, type, content});
            browserHistory.push('/');
        }
    }
}
