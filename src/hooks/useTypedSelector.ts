import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from 'store/interfaces';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
