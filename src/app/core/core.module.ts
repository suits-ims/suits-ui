import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {CandidatesModule} from "../modules/candidates/candidates.module";
import {StubComponent} from './stub/stub.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';


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
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    StubComponent
  ]
})
export class CoreModule {
}
