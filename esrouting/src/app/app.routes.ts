import { Routes } from '@angular/router';
import { FruitComponent } from './fruit-component/fruit-component';
import { AnimalComponent } from './animal-component/animal-component';

export const routes: Routes = [
  { path: 'animals', component: AnimalComponent},
  { path: 'fruits', component: FruitComponent}
  
];
