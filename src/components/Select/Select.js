/**
 * @file Select
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

import './Select.scss';

export default class Select extends Component {
    static propTypes = {
        options: PropTypes.array,
        onChange: PropTypes.func
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value || 'Select'
        }
    }

    render() {
        return (
            <div className="select" onClick={this.toggleList.bind(this)} ref="container">
                {this.getTextFromValue(this.state.value)}
                <ul>
                    {
                        _.map(this.props.options || [], option => {
                            return (
                                <li
                                key={option.value}
                                onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        value: option.value
                                    });
                                    this.props.onChange && this.props.onChange(option.value)
                                }}>{option.text}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    toggleList(e) {
        if (this.refs.container.className.indexOf('active') >= 0) {
            this.refs.container.classList.remove('active');
            return;
        }
        this.refs.container.classList.add('active');
    }

    getTextFromValue(value) {
        const item = _.find(this.props.options, {value: value});
        return item ? item.text : 'Select';
    }
}
