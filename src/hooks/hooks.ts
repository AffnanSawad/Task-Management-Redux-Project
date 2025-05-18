// src/app/hooks.ts
import type { RootState } from '@/Redux/store';
import {  useSelector, type TypedUseSelectorHook } from 'react-redux';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
