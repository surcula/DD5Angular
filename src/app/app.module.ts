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
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarUniversComponent } from './Components/univers/navbar-univers/navbar-univers.component';
import { PantheonComponent } from './Components/univers/pantheon/pantheon.component';


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
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
