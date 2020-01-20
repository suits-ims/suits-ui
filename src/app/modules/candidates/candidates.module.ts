import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateListComponent} from './candidate-list/candidate-list.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [CandidateListComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    CandidateListComponent
  ]

})
export class CandidatesModule {
}
