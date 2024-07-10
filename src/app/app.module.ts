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
import { HttpClientModule } from '@angular/common/http';
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faHome, faCircleLeft, faCircleRight, faDragon, faDiceD20);
  }
}
