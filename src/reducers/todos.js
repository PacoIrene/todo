import Immutable, {Map} from 'immutable';
import * as types from '../constants/ActionTypes';

let localState = localStorage.getItem('todos');

if (!localState) {
    localStorage.setItem('todos', JSON.stringify({
        lastId: 0,
        todoList: {}
    }));
    localState = localStorage.getItem('todos');;
}

const initialState = Immutable.fromJS(JSON.parse(localState));

export default function todos (state=initialState, action) {
    switch (action.type) {
        case types.ADD_ITEM:
            const newID = state.get('lastId') + 1;
            return state.update('lastId', val => newID)
                        .mergeIn(['todoList'], Map({
                            [newID]: Map({
                                id: newID,
                                content: action.entity.content,
                                type: action.entity.type,
                                completed: false
                            })
                        }));
        case types.UPDATE_ITEM:
            return state.mergeIn(['todoList', action.entity.id], Map({
                            content: action.entity.content,
                            type: action.entity.type
                        }));
        case types.COMPLETE_ITEM:
            return state.updateIn(['todoList', '' + action.id, 'completed'], val => !val);
        case types.DELETE_ITEM:
            return state.deleteIn(['todoList', '' + action.id]);
        default:
            return state;
    }
}
