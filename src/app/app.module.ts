import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReglesComponent } from './Components/regles/regles.component';
import { DonsComponent } from './Components/regles/dons/dons.component';
import { SortsComponent } from './Components/regles/sorts/sorts.component';
import { EquipementsComponent } from './Components/regles/equipements/equipements.component';
import { ArmesComponent } from './Components/regles/equipements/armes/armes.component';
import { ArmuresComponent } from './Components/regles/equipements/armures/armures.component';
import { OutilsComponent } from './Components/regles/equipements/outils/outils.component';
import { MonturesComponent } from './Components/regles/equipements/montures/montures.component';
import { ClassesComponent } from './Components/regles/classes/classes.component';
import { RacesComponent } from './Components/regles/races/races.component';
import { NavbarHeaderComponent } from './Components/navbar-header/navbar-header.component';
import { UniversComponent } from './Components/univers/univers.component';
import { AideDeJeuComponent } from './Components/aide-de-jeu/aide-de-jeu.component';
import { BuilderComponent } from './Components/builder/builder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NavbarUniversComponent } from './Components/univers/navbar-univers/navbar-univers.component';
import { PantheonComponent } from './Components/univers/pantheon/pantheon.component';
import { PlansComponent } from './Components/univers/plans/plans.component';
import { HomeComponent } from './Components/home/home.component';
import { CarousselComponent } from './Components/home/caroussel/caroussel.component';
import { NavbaraideComponent } from './Components/aide-de-jeu/navbaraide/navbaraide.component';
import { NavbarreglesComponent } from './Components/regles/navbarregles/navbarregles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationComponent } from './Components/regles/creation/creation.component';
import { BuilderHomeComponent } from './Components/builder/builder-home/builder-home.component';
import { BuilderRaceComponent } from './Components/builder/builder-race/builder-race.component';
import { BuilderclassComponent } from './Components/builder/builderclass/builderclass.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faDragon, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import {
  faHome,
  faDiceD20,
  faCircleLeft,
  faCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { BuilderCaracsComponent } from './Components/builder/builder-caracs/builder-caracs.component';
import { BuilderBackgroundComponent } from './Components/builder/builder-background/builder-background.component';
import { BuilderInfosComponent } from './Components/builder-infos/builder-infos.component';
import { BuilderInventoryComponent } from './Components/builder-inventory/builder-inventory.component';
import { RecapComponent } from './Components/builder/recap/recap.component';
import { FeuillesComponent } from './Components/builder/feuilles/feuilles.component';
import { HistoireComponent } from './Components/univers/histoire/histoire.component';
import { RoyaumeOubliesComponent } from './Components/univers/royaume-oublies/royaume-oublies.component';
import { ProvinceDeLaelithComponent } from './Components/univers/province-de-laelith/province-de-laelith.component';
import { OrganisationsComponent } from './Components/univers/organisations/organisations.component';
import { CultureDrakeidComponent } from './Components/univers/culture-drakeid/culture-drakeid.component';
import { CultureDrowComponent } from './Components/univers/culture-drow/culture-drow.component';
import { CultureElfiqueComponent } from './Components/univers/culture-elfique/culture-elfique.component';
import { CultureGnomeComponent } from './Components/univers/culture-gnome/culture-gnome.component';
import { CultureHalfelineComponent } from './Components/univers/culture-halfeline/culture-halfeline.component';
import { CultureNaineComponent } from './Components/univers/culture-naine/culture-naine.component';
import { DragonsComponent } from './Components/univers/dragons/dragons.component';
import { GnollsComponent } from './Components/univers/gnolls/gnolls.component';
import { GobelinsComponent } from './Components/univers/gobelins/gobelins.component';
import { HobgobelinsComponent } from './Components/univers/hobgobelins/hobgobelins.component';
import { KenkuComponent } from './Components/univers/kenku/kenku.component';
import { KoboldsComponent } from './Components/univers/kobolds/kobolds.component';
import { OrcsComponent } from './Components/univers/orcs/orcs.component';
import { TabaxisComponent } from './Components/univers/tabaxis/tabaxis.component';
import { Error404Component } from './Components/error404/error404.component';
import { LaelithComponent } from './Components/univers/laelith/laelith.component';
import { HistoriquesComponent } from './Components/regles/historiques/historiques.component';
import { PersonnalisationComponent } from './Components/regles/personnalisation/personnalisation.component';
import { CaracteristiquesComponent } from './Components/regles/caracteristiques/caracteristiques.component';
import { AventureComponent } from './Components/regles/aventure/aventure.component';
import { CombatComponent } from './Components/regles/combat/combat.component';
import { IncantationsComponent } from './Components/regles/incantations/incantations.component';
import { EtatsComponent } from './Components/regles/etats/etats.component';
import { TousLesMonstresComponent } from './Components/regles/tous-les-monstres/tous-les-monstres.component';
import { TousLesObjetsMagiquesComponent } from './Components/regles/tous-les-objets-magiques/tous-les-objets-magiques.component';
import { DicesComponent } from './Components/aide-de-jeu/dices/dices.component';
import { SortsDetailsComponent } from './Components/sorts-details/sorts-details.component';
import { ScrollTopInterceptor } from './Services/scroll-top.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ReglesComponent,
    DonsComponent,
    SortsComponent,
    EquipementsComponent,
    ArmesComponent,
    ArmuresComponent,
    OutilsComponent,
    MonturesComponent,
    ClassesComponent,
    RacesComponent,
    NavbarHeaderComponent,
    UniversComponent,
    AideDeJeuComponent,
    BuilderComponent,
    NavbarUniversComponent,
    PantheonComponent,
    PlansComponent,
    HomeComponent,
    CarousselComponent,
    NavbaraideComponent,
    NavbarreglesComponent,
    CreationComponent,
    BuilderHomeComponent,
    BuilderRaceComponent,
    BuilderclassComponent,
    BuilderCaracsComponent,
    BuilderBackgroundComponent,
    BuilderInfosComponent,
    BuilderInventoryComponent,
    RecapComponent,
    FeuillesComponent,
    HistoireComponent,
    RoyaumeOubliesComponent,
    ProvinceDeLaelithComponent,
    OrganisationsComponent,
    CultureDrakeidComponent,
    CultureDrowComponent,
    CultureElfiqueComponent,
    CultureGnomeComponent,
    CultureHalfelineComponent,
    CultureNaineComponent,
    DragonsComponent,
    GnollsComponent,
    GobelinsComponent,
    HobgobelinsComponent,
    KenkuComponent,
    KoboldsComponent,
    OrcsComponent,
    TabaxisComponent,
    Error404Component,
    LaelithComponent,
    HistoriquesComponent,
    PersonnalisationComponent,
    CaracteristiquesComponent,
    AventureComponent,
    CombatComponent,
    IncantationsComponent,
    EtatsComponent,
    TousLesMonstresComponent,
    TousLesObjetsMagiquesComponent,
    DicesComponent,
    SortsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ScrollTopInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faHome, faCircleLeft, faCircleRight, faDragon, faDiceD20);
  }
}
