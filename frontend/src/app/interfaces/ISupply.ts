import {IFood} from './IFood';

export interface ISupply {
    id: number;
    food: IFood;
    quantity: number;
}