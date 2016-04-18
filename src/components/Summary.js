/**
 * @file Summary
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

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
        return (
            <section>
                <h1>PacoIrene Todo</h1>
                <div>
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
                <span>{this.props.completedRate}% Completed</span>
            </section>
        );
    }
}
