export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
  symbol: string;
  activate: boolean;
  role: string;
}

export interface PeriodicElementsState {
  elements: PeriodicElement[];
}

export const initialState: PeriodicElementsState = {
  elements: [
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', activate: true, role: '1' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He', activate: true, role: '1' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', activate: true, role: '1' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', activate: false, role: '1' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B', activate: true, role: '1' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', activate: true, role: '1' },
    { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', activate: true, role: '1' },
    { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', activate: true, role: '1' },
    { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', activate: true, role: '1' },
    { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', activate: true, role: '1' },
  ]
};

export interface AppState {
  periodicElements: PeriodicElementsState;
}
