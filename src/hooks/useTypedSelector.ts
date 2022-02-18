import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@store/combineReducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
