import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversComponent } from './Components/univers/univers.component';
import { AideDeJeuComponent } from './Components/aide-de-jeu/aide-de-jeu.component';
import { ReglesComponent } from './Components/regles/regles.component';
import { BuilderComponent } from './Components/builder/builder.component';
import { PantheonComponent } from './Components/univers/pantheon/pantheon.component';

const routes: Routes = [
  {
    path: 'univers',
    component: UniversComponent,
    children: [{ path: 'pantheon', component: PantheonComponent }],
  },
  { path: 'aides-de-jeu', component: AideDeJeuComponent, children: [] },
  { path: 'regles', component: ReglesComponent, children: [] },
  { path: 'builder', component: BuilderComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
