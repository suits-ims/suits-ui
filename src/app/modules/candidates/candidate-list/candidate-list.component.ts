import {Component, OnInit} from '@angular/core';
import {Candidate} from "../../../shared/models/candidate";
import {CandidateService} from "../../../shared/services";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[];

  constructor(private candidateService: CandidateService) {
    this.candidateService.getCandidates().subscribe(value => this.candidates = value, error => console.log('Unable to get candidate list', error));
  }

  ngOnInit() {
  }

}
