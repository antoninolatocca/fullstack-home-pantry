import { Injectable } from '@angular/core';
import {IFood} from '../interfaces/IFood';
import {ISupply} from '../interfaces/ISupply';
import { Observable } from 'rxjs';

const HOST: string = 'http://localhost:3000/';
const FOOD: string = 'food';
const SUPPLY: string = 'supply';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getAllFoods(): Promise<any> {
    var url:string = HOST + FOOD;
    return await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(response => response.json());
  }

  async getAllSupplies(): Promise<any> {
    var url:string = HOST + SUPPLY;
    return await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(response => response.json());
  }

}
