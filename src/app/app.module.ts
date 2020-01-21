import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from "./core/core.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {CandidatesModule} from "./modules/candidates/candidates.module";
import {CandidateListComponent} from "./modules/candidates/candidate-list/candidate-list.component";
import {StubComponent} from "./core/stub/stub.component";
import {CandidateInfoComponent} from "./modules/candidates/candidate-info/candidate-info.component";


const appRoutes: Routes = [
  {
    path: 'candidates',
    component: CandidateListComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: StubComponent},
      {path: ':id', component: CandidateInfoComponent}
    ]
  },
  {path: '**', component: StubComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CandidatesModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
