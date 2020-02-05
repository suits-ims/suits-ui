import {Component, OnInit} from '@angular/core';
import {Candidate} from "../../../shared/models/candidate";
import {CandidateService} from "../../../shared/services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[];
  sort: string;

  constructor(private candidateService: CandidateService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.candidateService.getCandidates().subscribe(value => this.candidates = value, error => console.log('Unable to get candidate list', error));

    this.route.queryParams
      .subscribe(params => {
        if (params.sortCandidates) {
          this.sort = params.sortCandidates;
          console.log('sort', this.sort);

          if (this.candidates) {
            this.candidates = this.candidates.sort((a, b) => a[this.sort].localeCompare(b[this.sort]))
          }
        }
      });
  }
}
