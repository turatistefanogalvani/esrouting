import { Routes } from '@angular/router';
import { FruitComponent } from './fruit-component/fruit-component';
import { AnimalComponent } from './animal-component/animal-component';
import { GenericComponent } from './generic-component/generic-component';

export const routes: Routes = [
  { path: 'animals', component: AnimalComponent },
  { path: 'fruits', component: FruitComponent },
  { path: 'generic/:id', component: GenericComponent }
];




