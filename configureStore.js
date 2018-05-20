
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/app';

let composeEnhancers = compose;
if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools)({
    name: Platform.OS,
    ...require('./package.json').remotedev,
    //actionCreators,
  });
  /* eslint-enable no-underscore-dangle */
}
//once we make actions we can do this... we'll have to import each one

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers/app').default);
    });
  }
  return store;
}
