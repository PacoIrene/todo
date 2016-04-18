import Immutable, {Map} from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Immutable.fromJS({
    todosById: [1, 2],
    todoList: {
        1: {
            content: 'hey',
            completed: false
        },
        2: {
            content: 'yo',
            completed: false
        }
    }
});

export default function todos (state = initialState, action) {
    switch(action.type) {
        case types.ADD_ITEM:
            const newID = state.get('todosById').size === 0 ? 0 : state.get('todosById').last() + 1;
            return state.update('todosById', todosById => todosById.push(newID))
                        .mergeIn(['todoList'], Map({
                            [newID]: Map({
                                content: action.content,
                                completed: false
                            })
                        }));
        case types.COMPLETE_ITEM:
            return state.updateIn(['todoList', '' + action.id, 'completed'], val => !val);
        case types.DELETE_ITEM:
            return state.update('todosById', todosById => todosById.delete(todosById.indexOf(action.id)))
                        .deleteIn(['todoList', '' + action.id]);
        default:
            return state;
    }
}
