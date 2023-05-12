import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IFood } from '../../../interfaces/IFood';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: IFood[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllFoods().then(foodList => this.foods = foodList);
  }
}
