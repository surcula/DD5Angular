import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversComponent } from './Components/univers/univers.component';
import { AideDeJeuComponent } from './Components/aide-de-jeu/aide-de-jeu.component';
import { ReglesComponent } from './Components/regles/regles.component';
import { BuilderComponent } from './Components/builder/builder.component';
import { PantheonComponent } from './Components/univers/pantheon/pantheon.component';
import { PlansComponent } from './Components/univers/plans/plans.component';
import { HomeComponent } from './Components/home/home.component';
import { RacesComponent } from './Components/regles/races/races.component';
import { ClassesComponent } from './Components/regles/classes/classes.component';
import { SortsComponent } from './Components/regles/sorts/sorts.component';
import { CreationComponent } from './Components/regles/creation/creation.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {
    path: 'univers',
    component: UniversComponent,
    children: [
      { path: 'plans', component: PlansComponent },
      { path: 'pantheon', component: PantheonComponent },
    ],
  },
  { path: 'aides-de-jeu', component: AideDeJeuComponent, children: [] },
  { path: 'regles', component: ReglesComponent, children: [
    { path: 'races', component: RacesComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'sorts', component: SortsComponent },
    { path: 'creation', component: CreationComponent },
  ] },
  { path: 'builder', component: BuilderComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
