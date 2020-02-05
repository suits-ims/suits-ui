import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {
  CandidateInfoComponent,
  CandidateListComponent,
  CandidateListItemComponent,
  CandidateListMenuItemComponent,
  CandidateNewComponent
} from '.';

@NgModule({
  declarations: [
    CandidateListComponent,
    CandidateInfoComponent,
    CandidateListItemComponent,
    CandidateNewComponent,
    CandidateListMenuItemComponent
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
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    CandidateListComponent,
    CandidateInfoComponent,
    CandidateListItemComponent
  ]

})
export class CandidatesModule {
}
