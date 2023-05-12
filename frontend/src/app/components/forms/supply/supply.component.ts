import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IFood } from 'src/app/interfaces/IFood';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss']
})
export class SupplyComponent implements OnInit {

  activeUnit: string | undefined = "";

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getAllFoods().then(foodList => this.options = foodList.map((food:IFood) => food.name));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  updateUnit(e: Event) {
    // this.activeUnit = this.options.find(food => food.id === 1)?.unit;
  }

  onSubmit(supplyform: NgForm) {
    console.log(supplyform.form);
  }

}
