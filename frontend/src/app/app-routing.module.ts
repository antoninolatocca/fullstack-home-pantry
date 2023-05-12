import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodComponent as FoodFormComponent } from './components/forms/food/food.component';
import { SupplyComponent as SupplyFormComponent } from './components/forms/supply/supply.component';
import { FoodComponent as FoodListComponent } from './components/lists/food/food.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'foods', component: FoodListComponent },
  { path: 'add-food', component: FoodFormComponent },
  { path: 'add-supply', component: SupplyFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }