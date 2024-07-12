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
import { BuilderRaceComponent } from './Components/builder/builder-race/builder-race.component';
import { BuilderclassComponent } from './Components/builder/builderclass/builderclass.component';
import { BuilderHomeComponent } from './Components/builder/builder-home/builder-home.component';
import { BuilderCaracsComponent } from './Components/builder/builder-caracs/builder-caracs.component';
import { BuilderBackgroundComponent } from './Components/builder/builder-background/builder-background.component';
import { Error404Component } from './Components/error404/error404.component';
import { CultureDrakeidComponent } from './Components/univers/culture-drakeid/culture-drakeid.component';
import { CultureDrowComponent } from './Components/univers/culture-drow/culture-drow.component';
import { CultureElfiqueComponent } from './Components/univers/culture-elfique/culture-elfique.component';
import { CultureGnomeComponent } from './Components/univers/culture-gnome/culture-gnome.component';
import { CultureHalfelineComponent } from './Components/univers/culture-halfeline/culture-halfeline.component';
import { CultureNaineComponent } from './Components/univers/culture-naine/culture-naine.component';
import { DragonsComponent } from './Components/univers/dragons/dragons.component';
import { GnollsComponent } from './Components/univers/gnolls/gnolls.component';
import { GobelinsComponent } from './Components/univers/gobelins/gobelins.component';
import { HistoireComponent } from './Components/univers/histoire/histoire.component';
import { HobgobelinsComponent } from './Components/univers/hobgobelins/hobgobelins.component';
import { KenkuComponent } from './Components/univers/kenku/kenku.component';
import { KoboldsComponent } from './Components/univers/kobolds/kobolds.component';
import { OrcsComponent } from './Components/univers/orcs/orcs.component';
import { OrganisationsComponent } from './Components/univers/organisations/organisations.component';
import { ProvinceDeLaelithComponent } from './Components/univers/province-de-laelith/province-de-laelith.component';
import { RoyaumeOubliesComponent } from './Components/univers/royaume-oublies/royaume-oublies.component';
import { TabaxisComponent } from './Components/univers/tabaxis/tabaxis.component';
import { LaelithComponent } from './Components/univers/laelith/laelith.component';
import { AventureComponent } from './Components/regles/aventure/aventure.component';
import { CaracteristiquesComponent } from './Components/regles/caracteristiques/caracteristiques.component';
import { CombatComponent } from './Components/regles/combat/combat.component';
import { EtatsComponent } from './Components/regles/etats/etats.component';
import { HistoriquesComponent } from './Components/regles/historiques/historiques.component';
import { IncantationsComponent } from './Components/regles/incantations/incantations.component';
import { TousLesMonstresComponent } from './Components/regles/tous-les-monstres/tous-les-monstres.component';
import { TousLesObjetsMagiquesComponent } from './Components/regles/tous-les-objets-magiques/tous-les-objets-magiques.component';
import { EquipementsComponent } from './Components/regles/equipements/equipements.component';
import { SortsDetailsComponent } from './Components/sorts-details/sorts-details.component';
import { DicesComponent } from './Components/aide-de-jeu/dices/dices.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {
    path: 'univers',
    component: UniversComponent,
    children: [
      { path: 'plans', component: PlansComponent },
      { path: 'pantheon', component: PantheonComponent },
      { path: 'cultureDrakeide', component: CultureDrakeidComponent },
      { path: 'cultureDrow', component: CultureDrowComponent },
      { path: 'cultureElfique', component: CultureElfiqueComponent },
      { path: 'cultureGnome', component: CultureGnomeComponent },
      { path: 'cultureHalfeline', component: CultureHalfelineComponent },
      { path: 'cultureNaine', component: CultureNaineComponent },
      { path: 'dragons', component: DragonsComponent },
      { path: 'gnolls', component: GnollsComponent },
      { path: 'gobelins', component: GobelinsComponent },
      { path: 'histoire', component: HistoireComponent },
      { path: 'hobgobelins', component: HobgobelinsComponent },
      { path: 'kenku', component: KenkuComponent },
      { path: 'kobolds', component: KoboldsComponent },
      { path: 'orcs', component: OrcsComponent },
      { path: 'organisations', component: OrganisationsComponent },
      { path: 'provincesDeLaelith', component: ProvinceDeLaelithComponent },
      { path: 'royaumesOublies', component: RoyaumeOubliesComponent },
      { path: 'tabaxis', component: TabaxisComponent },
      { path: 'laelith', component: LaelithComponent },
    ],
  },
  { path: 'aides-de-jeu', component: AideDeJeuComponent, children: [
    { path: 'dicesRoll', component: DicesComponent },
  ] },
  { path: 'regles', component: ReglesComponent, children: [
    { path: 'races', component: RacesComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'sorts', component: SortsComponent },
    { path: 'sortsDetails/:id', component: SortsDetailsComponent },
    { path: 'aventure', component: AventureComponent },
    { path: 'caracteristiques', component: CaracteristiquesComponent },
    { path: 'combat', component: CombatComponent },
    { path: 'etats', component: EtatsComponent },
    { path: 'historiques', component: HistoriquesComponent },
    { path: 'incantations', component: IncantationsComponent },
    { path: 'personnalisation', component: IncantationsComponent },
    { path: 'tousLesMonstres', component: TousLesMonstresComponent },
    { path: 'tousLesObjetsMagiques', component: TousLesObjetsMagiquesComponent },
    { path: 'equipements', component: EquipementsComponent },
    { path: 'creation', component: CreationComponent },
    

  ] },
  { path: 'builder', component: BuilderComponent, children: [
    { path: 'home', component: BuilderHomeComponent },
    { path: 'race', component: BuilderRaceComponent },
    { path: 'class', component: BuilderclassComponent },
    { path: 'background', component: BuilderBackgroundComponent },
    { path: 'caracs', component: BuilderCaracsComponent },
  ] },
  {path: '**', component: Error404Component,pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
