import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';

export let appState: AppState = { 
	cabeza: 'https://fmdataba.com/images/p/147073.png',
	cuerpo: 'https://www.sofutbol.com/images/2023/0220/fc2324-21.jpg',
	balon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_v8TK24itMm3OvxTC9u0EqU-YVJlLOAPKQ&usqp=CAU',
};

console.log(appState);
let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
