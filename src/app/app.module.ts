import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {CoreModule} from "./core/core.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {CandidatesModule} from "./modules/candidates/candidates.module";
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from "../environments/environment";
import {AppRoutes} from "./app.routes";
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from "./angular-material.module";

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CandidatesModule,
    KeycloakAngularModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot(
      AppRoutes,
      {enableTracing: true}
    )
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    }
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {

  async ngDoBootstrap(app) {
    const {keycloakConfig} = environment;

    try {
      await keycloakService.init({config: keycloakConfig});
      app.bootstrap(AppComponent);
    } catch (error) {
      console.error('Keycloak init failed', error);
    }
  }
}
