import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from "../../../shared/models/candidate";

@Component({
  selector: 'app-candidate-list-item',
  templateUrl: './candidate-list-item.component.html',
  styleUrls: ['./candidate-list-item.component.css']
})
export class CandidateListItemComponent implements OnInit {

  @Input() candidate: Candidate;

  constructor() {
  }

  ngOnInit() {
  }

}
