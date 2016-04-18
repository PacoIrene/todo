import {createStore, compose} from 'redux';

const finalCreateStore = compose(
   window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default finalCreateStore;
