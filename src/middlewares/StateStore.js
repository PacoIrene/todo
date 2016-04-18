/**
 * @file StateStore
 * @author PacoIrene(zhenyangchu@baidu.com)
 */

const stateStore = store => next => action => {
    const result = next(action);
    const state = store.getState().todos.toJS();
    localStorage.setItem('todos', JSON.stringify(state));
    return result;
};

export default stateStore;
