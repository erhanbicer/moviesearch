import { combineReducers } from 'redux';
import { appReadinessReducer } from '@store/appReadiness/appReadinessReducer';

const reducers = combineReducers({
  appReadiness: appReadinessReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
