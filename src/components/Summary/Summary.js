/**
 * @file Summary
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import moment from 'moment';

import './Summary.scss';

export default class Summary extends Component {
    /*
     * summaryList: [
            {
                text: 'work',
                number: 12
            }
       ]
     */


    static propTypes = {
        summaryList: PropTypes.array.isRequired,
        completedRate: PropTypes.number.isRequired
    }

    render() {
        const today = moment().format('MMM DD,YYYY');
        return (
            <section className="todo-summary">
                <div className="todo-summary-title">
                    <h1>PacoIrene <br></br>Todo</h1>
                    <span>{today}</span>
                </div>
                <div className="todo-summary-data">
                    <div className="mask"></div>
                    <div className="todo-summary-list">
                        {
                            _.map(this.props.summaryList, item => {
                                return (
                                    <p key={item.id}>
                                        <span>{item.number}</span>
                                        {item.type}
                                    </p>
                                );
                            })
                        }
                    </div>
                    <span className="todo-summary-rate">{this.props.completedRate}% Completed</span>
                </div>
            </section>
        );
    }
}
