import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateListComponent} from './candidate-list/candidate-list.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {CandidateInfoComponent} from './candidate-info/candidate-info.component';
import {RouterModule} from "@angular/router";
import {CandidateListItemComponent} from './candidate-list-item/candidate-list-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CandidateListComponent,
    CandidateInfoComponent,
    CandidateListItemComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    CandidateListComponent,
    CandidateInfoComponent,
    CandidateListItemComponent
  ]

})
export class CandidatesModule {
}
