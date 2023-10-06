export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	cabeza: string;
	cuerpo:string;
	balon:string;
};

export enum TopImagesActions {
	'TOPIMAGES' = 'TOPIMAGES',
	'MEDIUMIMAGES' = 'MEDIUMIMAGES',
	'BOTTOMIMAGES' = 'BOTTOMIMAGES',

	
}

export interface TopImageAction {
	action:TopImagesActions.TOPIMAGES;		
	payload: 'img';
}	

export interface MediumImageAction {
	action:TopImagesActions.MEDIUMIMAGES;		
	payload: 'img';
}	

export interface BottomImageAction {
	action:TopImagesActions.BOTTOMIMAGES;		
	payload: 'img';
}	




export type Actions =TopImageAction | MediumImageAction | BottomImageAction