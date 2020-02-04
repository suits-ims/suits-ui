import {Routes} from '@angular/router';
import {CandidateListComponent} from "./modules/candidates/candidate-list/candidate-list.component";
import {AuthenticationGuardService} from "./shared/services";
import {StubComponent} from "./core";
import {CandidateInfoComponent} from "./modules/candidates/candidate-info/candidate-info.component";

export const AppRoutes: Routes = [
  {
    path: 'candidates',
    component: CandidateListComponent,
    data: {roles: ['manager']},
    canActivate: [AuthenticationGuardService],
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: StubComponent},
      {path: ':id', component: CandidateInfoComponent}
    ],
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: StubComponent, canActivate: [AuthenticationGuardService]}
];
