import { combineReducers } from 'redux';
import networkReducer from '@store/network/networkReducer';

const reducers = combineReducers({
  network: networkReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
