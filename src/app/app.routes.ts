import {Routes} from '@angular/router';
import {CandidateInfoComponent, CandidateListComponent, CandidateNewComponent} from "./modules/candidates";
import {AuthenticationGuardService} from "./shared/services";
import {StubComponent} from "./core";

export const AppRoutes: Routes = [
  {
    path: 'candidates',
    component: CandidateListComponent,
    data: {roles: ['manager']},
    canActivate: [AuthenticationGuardService],
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: StubComponent},
      {path: 'new', component: CandidateNewComponent},
      {path: ':id', component: CandidateInfoComponent}
    ],
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: StubComponent, canActivate: [AuthenticationGuardService]}
];
