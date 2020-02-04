import {NgModule} from '@angular/core';
import {HeaderComponent, SidebarComponent, StubComponent} from '.';
import {CandidatesModule} from "../modules/candidates/candidates.module";
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    StubComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CandidatesModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    StubComponent
  ]
})
export class CoreModule {
}
