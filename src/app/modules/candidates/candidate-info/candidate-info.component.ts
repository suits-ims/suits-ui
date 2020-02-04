import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CandidateService} from "../../../shared/services";
import {Candidate} from "../../../shared/models/candidate";

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit, OnDestroy {
  private sub: any;

  id: number;
  candidate: Candidate = new Candidate();

  constructor(private route: ActivatedRoute, private candidateService: CandidateService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.candidateService.getCandidate(this.id)
        .subscribe(candidate => this.candidate = candidate,
          error => console.log('Unable to get candidate', error));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
